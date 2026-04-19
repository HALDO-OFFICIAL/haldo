/**
 * Supabase Database 타입 정의
 * 멤버쉽 정책서 Ver.0.2 기반
 */

// ============================================
// 권한 등급 (어드민 관리용, 고객 비노출)
// ============================================
export const PERMISSION_LEVELS = {
  /** lv.0: 카톡 간편 가입만 완료 */
  KAKAO_ONLY: 0,
  /** lv.1: 필수 정보 작성 완료 (심사 대기) */
  INFO_SUBMITTED: 1,
  /** lv.2: 정회원 (관리자 승인) */
  APPROVED: 2,
  /** lv.3: 스토어 이용 */
  STORE: 3,
  /** lv.4: 판매 회원 */
  SELLER: 4,
  /** lv.5: 운영 회원 */
  OPERATOR: 5,
} as const;

export type PermissionLevel =
  (typeof PERMISSION_LEVELS)[keyof typeof PERMISSION_LEVELS];

// ============================================
// 활동 등급 (고객 노출, lv.2+ 적용)
// ============================================
export const CLOVER_LEVELS = {
  /** 한잎 클로버 (기본) */
  ONE_LEAF: 1,
  /** 두잎 클로버 (월 인증 80%+, 크레딧 2만원, 초대장 1장) */
  TWO_LEAF: 2,
  /** 세잎 클로버 (상위 10%, 크레딧 3만원, 초대장 2장) */
  THREE_LEAF: 3,
  /** 네잎 클로버 (상위 1%, 크레딧 5만원, 초대장 3장, 클럽 개설권) */
  FOUR_LEAF: 4,
} as const;

export type CloverLevel =
  (typeof CLOVER_LEVELS)[keyof typeof CLOVER_LEVELS];

export const CLOVER_LABELS: Record<CloverLevel, string> = {
  1: '한잎 클로버',
  2: '두잎 클로버',
  3: '세잎 클로버',
  4: '네잎 클로버',
};

// ============================================
// 심사 상태
// ============================================
export type ScreeningStatus = 'pending' | 'approved' | 'rejected';

// ============================================
// Database 타입
// ============================================
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          phone: string;
          nickname: string;
          gender: string | null;
          birth_date: string;
          phone_verified: boolean;
          permission_level: number;
          clover_level: number;
          referral_code: string | null;
          referred_by: string | null;
          referral_verified: boolean;
          screening_status: ScreeningStatus;
          screening_rejected_reason: string | null;
          approved_at: string | null;
          approved_by: string | null;
          credit_balance: number;
          monthly_cert_count: number;
          invite_count: number;
          hobby: string | null;
          strength: string | null;
          favorite_song: string | null;
          motto: string | null;
          dream_destination: string | null;
          favorite_sport: string | null;
          favorite_food: string | null;
          health_tip: string | null;
          five_year_plan: string | null;
          main_area: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name: string;
          phone: string;
          nickname: string;
          gender?: string | null;
          birth_date: string;
          phone_verified?: boolean;
          permission_level?: number;
          clover_level?: number;
          referral_code?: string | null;
          referred_by?: string | null;
          referral_verified?: boolean;
          screening_status?: ScreeningStatus;
          screening_rejected_reason?: string | null;
          approved_at?: string | null;
          approved_by?: string | null;
          credit_balance?: number;
          monthly_cert_count?: number;
          invite_count?: number;
          hobby?: string | null;
          strength?: string | null;
          favorite_song?: string | null;
          motto?: string | null;
          dream_destination?: string | null;
          favorite_sport?: string | null;
          favorite_food?: string | null;
          health_tip?: string | null;
          five_year_plan?: string | null;
          main_area?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          phone?: string;
          nickname?: string;
          gender?: string | null;
          birth_date?: string;
          phone_verified?: boolean;
          permission_level?: number;
          clover_level?: number;
          referral_code?: string | null;
          referred_by?: string | null;
          referral_verified?: boolean;
          screening_status?: ScreeningStatus;
          screening_rejected_reason?: string | null;
          approved_at?: string | null;
          approved_by?: string | null;
          credit_balance?: number;
          monthly_cert_count?: number;
          invite_count?: number;
          hobby?: string | null;
          strength?: string | null;
          favorite_song?: string | null;
          motto?: string | null;
          dream_destination?: string | null;
          favorite_sport?: string | null;
          favorite_food?: string | null;
          health_tip?: string | null;
          five_year_plan?: string | null;
          main_area?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      invites: {
        Row: {
          id: string;
          inviter_id: string;
          code: string;
          used_by: string | null;
          used_at: string | null;
          expires_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          inviter_id: string;
          code: string;
          used_by?: string | null;
          used_at?: string | null;
          expires_at: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          inviter_id?: string;
          code?: string;
          used_by?: string | null;
          used_at?: string | null;
          expires_at?: string;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

// ============================================
// 편의 타입 alias
// ============================================
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];

export type Invite = Database['public']['Tables']['invites']['Row'];
export type InviteInsert = Database['public']['Tables']['invites']['Insert'];
export type InviteUpdate = Database['public']['Tables']['invites']['Update'];
