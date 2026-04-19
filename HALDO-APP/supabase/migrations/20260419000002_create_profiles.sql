-- profiles 테이블: 멤버쉽 정책서 기반 회원 프로필
create table profiles (
  id uuid references auth.users(id) on delete cascade primary key,

  -- 기본 정보
  name text not null,                    -- 실명
  phone text not null,                   -- 핸드폰 번호
  nickname text unique not null,         -- 닉네임 (중복 확인)
  gender text,                           -- 본인 인증으로 판별 (female/male)
  birth_date date not null,              -- 생년월일
  phone_verified boolean default false,  -- SMS 인증 여부

  -- 권한 등급 (어드민 관리용, 고객 비노출, 0~5)
  -- lv.0: 카톡 간편 가입만 완료
  -- lv.1: 필수 정보 작성 완료 (심사 대기)
  -- lv.2: 정회원 (관리자 승인)
  -- lv.3: 스토어 이용
  -- lv.4: 판매 회원
  -- lv.5: 운영 회원
  permission_level integer default 0 check (permission_level between 0 and 5),

  -- 활동 등급 (고객 노출, lv.2+ 정회원에게 적용)
  -- 1=한잎 클로버, 2=두잎 클로버, 3=세잎 클로버, 4=네잎 클로버
  clover_level integer default 1 check (clover_level between 1 and 4),

  -- 추천인 코드
  referral_code text,                    -- 본인의 추천인 코드 (닉네임+핸드폰 뒷4자리, 자동 생성)
  referred_by text,                      -- 가입 시 입력한 추천인 코드
  referral_verified boolean default false, -- 추천인 코드 검증 완료 여부

  -- 심사
  screening_status text default 'pending' check (screening_status in ('pending', 'approved', 'rejected')),
  screening_rejected_reason text,        -- 거절 사유
  approved_at timestamptz,
  approved_by uuid,                      -- 승인한 관리자 ID

  -- 활동 통계
  credit_balance integer default 0,
  monthly_cert_count integer default 0,
  invite_count integer default 0,        -- 보유 초대장 수

  -- 10문 10답 (선택 입력, lv.2 이후)
  hobby text,                -- 취미
  strength text,             -- 나의 장점
  favorite_song text,        -- 애창곡
  motto text,                -- 좌우명
  dream_destination text,    -- 인생 여행지
  favorite_sport text,       -- 좋아하는 운동
  favorite_food text,        -- 즐겨먹는 음식
  health_tip text,           -- 나의 건강팁
  five_year_plan text,       -- 나의 5년 후
  main_area text,            -- 주 활동지역

  -- 타임스탬프
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- 인덱스
create index idx_profiles_nickname on profiles(nickname);
create index idx_profiles_referral_code on profiles(referral_code);
create index idx_profiles_permission_level on profiles(permission_level);
create index idx_profiles_screening_status on profiles(screening_status);

-- updated_at 자동 갱신 트리거
create trigger profiles_updated_at
  before update on profiles
  for each row execute function update_updated_at();
