---
name: setup-supabase
description: "할두 앱의 Supabase 백엔드를 설정하는 스킬. DB 스키마 설계, 마이그레이션 생성, RLS 정책 작성, Auth 설정, Storage 버킷, Edge Functions, TypeScript 타입 생성을 수행한다. 'DB 설계해줘', '스키마 만들어줘', 'Supabase 설정해줘', '인증 구현해줘', '테이블 추가해줘' 등의 요청 시 사용."
---

# Setup Supabase — 할두 백엔드 구축 가이드

할두 앱의 Supabase 백엔드를 설계하고 구현하는 절차적 가이드.

## 프로젝트 초기 설정

### Supabase CLI 초기화
```bash
npx supabase init
```

생성되는 구조:
```
supabase/
├── config.toml          # 프로젝트 설정
├── migrations/          # SQL 마이그레이션 파일
├── functions/           # Edge Functions (Deno)
└── seed.sql            # 시드 데이터
```

### 환경 변수
```
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>  # 서버 전용, 절대 클라이언트 노출 금지
```

## 스키마 설계 원칙

### 네이밍
- 테이블: snake_case 복수형 (users, posts, invites)
- 컬럼: snake_case (created_at, invite_code)
- 인덱스: `idx_{table}_{column}` (idx_posts_author_id)
- RLS 정책: `{action}_{table}_{role}` (select_posts_anon)

### 공통 컬럼
모든 테이블에 포함:
```sql
id uuid default gen_random_uuid() primary key,
created_at timestamptz default now() not null,
updated_at timestamptz default now() not null
```

### updated_at 자동 갱신 트리거
```sql
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;
```

## 할두 핵심 스키마

### profiles (사용자 프로필)
Supabase Auth의 auth.users를 확장하는 public 테이블:
```sql
create table profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  nickname text not null,
  region text,
  age_group text,  -- '50대', '60대'
  marriage_status text,
  has_children boolean default false,
  has_pet boolean default false,
  hobbies text[],
  bio text,
  tier text default 'classic' check (tier in ('classic','signature','premium','noblesse')),
  credit_balance integer default 0,
  monthly_cert_count integer default 0,
  invite_count integer default 0,  -- 보유 초대장 수
  status text default 'pending' check (status in ('pending','approved','rejected')),
  approved_at timestamptz,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);
```

### posts (피드 글)
```sql
create table posts (
  id uuid default gen_random_uuid() primary key,
  author_id uuid references profiles(id) on delete cascade not null,
  content text not null check (char_length(content) <= 300),
  image_url text,
  tag text not null check (tag in ('건강','사람','취미','일상','요리','운동')),
  likes_count integer default 0,
  comments_count integer default 0,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);
```

### comments
```sql
create table comments (
  id uuid default gen_random_uuid() primary key,
  post_id uuid references posts(id) on delete cascade not null,
  author_id uuid references profiles(id) on delete cascade not null,
  content text not null check (char_length(content) <= 200),
  created_at timestamptz default now() not null
);
```

### invites (초대장)
```sql
create table invites (
  id uuid default gen_random_uuid() primary key,
  inviter_id uuid references profiles(id) on delete cascade not null,
  code text unique not null,
  invitee_email text,
  used_at timestamptz,
  expires_at timestamptz not null,
  created_at timestamptz default now() not null
);
```

## RLS 정책 패턴

### 피드 — 누구나 읽기, 승인 멤버만 쓰기
```sql
-- 읽기: 모든 사용자 (비로그인 포함)
create policy "select_posts_anon" on posts
  for select using (true);

-- 쓰기: 승인된 멤버만
create policy "insert_posts_approved" on posts
  for insert with check (
    auth.uid() = author_id
    and exists (
      select 1 from profiles
      where id = auth.uid() and status = 'approved'
    )
  );

-- 수정/삭제: 본인만
create policy "update_posts_owner" on posts
  for update using (auth.uid() = author_id);

create policy "delete_posts_owner" on posts
  for delete using (auth.uid() = author_id);
```

### 프로필 — 본인만 수정, 읽기는 승인 멤버 간
```sql
create policy "select_profiles_approved" on profiles
  for select using (
    status = 'approved'
    or id = auth.uid()
  );

create policy "update_profiles_owner" on profiles
  for update using (auth.uid() = id);
```

## Storage 설정

### 이미지 버킷
```sql
insert into storage.buckets (id, name, public)
values ('post-images', 'post-images', true);

-- 업로드: 승인 멤버만
create policy "upload_images_approved" on storage.objects
  for insert with check (
    bucket_id = 'post-images'
    and auth.role() = 'authenticated'
  );
```

## 마이그레이션 생성

```bash
npx supabase migration new {description}
# 예: npx supabase migration new create_profiles_table
```

하나의 마이그레이션에 하나의 논리적 변경만 포함한다. 기존 마이그레이션 파일은 수정하지 않고 새 마이그레이션으로 변경을 추가한다.

## TypeScript 타입 동기화

```bash
npx supabase gen types typescript --local > src/types/supabase.ts
```

이 파일을 frontend-dev가 import하여 타입 안전한 쿼리를 작성한다.

## 빌드 검증

스키마 변경 후:
1. `npx supabase db reset` — 로컬 DB 리셋 + 마이그레이션 재실행
2. `npx supabase gen types typescript --local` — 타입 재생성
3. `npm run build` — 프론트 빌드에서 타입 에러 없는지 확인
