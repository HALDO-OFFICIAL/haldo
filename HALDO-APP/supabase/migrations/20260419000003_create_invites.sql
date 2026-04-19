-- invites 테이블: 초대장 관리
create table invites (
  id uuid default gen_random_uuid() primary key,
  inviter_id uuid references profiles(id) on delete cascade not null,
  code text unique not null,
  used_by uuid references profiles(id),
  used_at timestamptz,
  expires_at timestamptz not null,
  created_at timestamptz default now() not null
);

-- 인덱스
create index idx_invites_code on invites(code);
create index idx_invites_inviter on invites(inviter_id);
