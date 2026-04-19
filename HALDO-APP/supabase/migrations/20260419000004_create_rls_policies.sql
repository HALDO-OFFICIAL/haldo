-- ============================================
-- RLS 정책: profiles 테이블
-- ============================================
alter table profiles enable row level security;

-- 본인 프로필은 항상 조회 가능
create policy "select_own_profile" on profiles
  for select using (auth.uid() = id);

-- lv.2+ 정회원은 다른 정회원 프로필 조회 가능
create policy "select_approved_profiles" on profiles
  for select using (
    permission_level >= 2
    and exists (
      select 1 from profiles where id = auth.uid() and permission_level >= 2
    )
  );

-- 프로필 생성: 인증된 사용자 (카카오 로그인 직후)
create policy "insert_own_profile" on profiles
  for insert with check (auth.uid() = id);

-- 프로필 수정: 본인만
-- 주의: permission_level, clover_level, screening_status 등은 서버사이드(service_role)로만 변경
create policy "update_own_profile" on profiles
  for update using (auth.uid() = id);

-- ============================================
-- RLS 정책: invites 테이블
-- ============================================
alter table invites enable row level security;

-- 본인의 초대장 조회
create policy "select_own_invites" on invites
  for select using (auth.uid() = inviter_id);

-- 초대장 생성: lv.2+ 정회원만 가능
create policy "insert_invites_approved" on invites
  for insert with check (
    auth.uid() = inviter_id
    and exists (
      select 1 from profiles where id = auth.uid() and permission_level >= 2
    )
  );
