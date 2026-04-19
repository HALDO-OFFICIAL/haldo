-- ============================================
-- 시드 데이터: 테스트용 더미 계정
-- 주의: auth.users 테이블에 먼저 사용자가 존재해야 합니다.
-- Supabase Dashboard에서 사용자를 생성한 후 아래 UUID를 교체하세요.
-- ============================================

-- 관리자 계정 (lv.5 운영 회원)
insert into profiles (
  id, name, phone, nickname, gender, birth_date,
  phone_verified, permission_level, clover_level,
  referral_code, screening_status, approved_at
) values (
  '00000000-0000-0000-0000-000000000001',
  '관리자', '010-1234-5678', '할두관리자', 'female', '1970-01-15',
  true, 5, 4,
  '할두관리자5678', 'approved', now()
);

-- 정회원 1 (lv.2, 두잎 클로버)
insert into profiles (
  id, name, phone, nickname, gender, birth_date,
  phone_verified, permission_level, clover_level,
  referral_code, referred_by, referral_verified,
  screening_status, approved_at, approved_by,
  credit_balance, invite_count,
  hobby, favorite_song, main_area
) values (
  '00000000-0000-0000-0000-000000000002',
  '김슬기', '010-2222-1452', '슬기엄마', 'female', '1968-05-20',
  true, 2, 2,
  '슬기엄마1452', '할두관리자5678', true,
  'approved', now(), '00000000-0000-0000-0000-000000000001',
  20000, 1,
  '등산', '보고싶다', '서울 강남'
);

-- 정회원 2 (lv.2, 한잎 클로버)
insert into profiles (
  id, name, phone, nickname, gender, birth_date,
  phone_verified, permission_level, clover_level,
  referral_code, referred_by, referral_verified,
  screening_status, approved_at, approved_by,
  hobby, main_area
) values (
  '00000000-0000-0000-0000-000000000003',
  '박영희', '010-3333-7890', '영희언니', 'female', '1965-11-03',
  true, 2, 1,
  '영희언니7890', '슬기엄마1452', true,
  'approved', now(), '00000000-0000-0000-0000-000000000001',
  '요가', '서울 송파'
);

-- 심사 대기 회원 (lv.1, pending)
insert into profiles (
  id, name, phone, nickname, gender, birth_date,
  phone_verified, permission_level,
  referred_by, referral_verified,
  screening_status
) values (
  '00000000-0000-0000-0000-000000000004',
  '이미영', '010-4444-3456', '미영맘', 'female', '1972-08-25',
  true, 1,
  '슬기엄마1452', true,
  'pending'
);
