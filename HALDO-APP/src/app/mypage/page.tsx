"use client";

import FeedHeader from "@/components/FeedHeader";
import BottomNav from "@/components/BottomNav";

const MENU_ITEMS = [
  { icon: "📝", label: "내가 쓴 글" },
  { icon: "❤️", label: "좋아요한 글" },
  { icon: "🏅", label: "내 등급" },
  { icon: "🎟️", label: "초대장" },
  { icon: "💰", label: "포인트 내역" },
  { icon: "🔔", label: "알림 설정" },
  { icon: "📞", label: "고객센터" },
];

export default function MyPage() {
  return (
    <>
      <FeedHeader />

      <main className="flex-1 pb-[80px]">
        {/* 프로필 카드 */}
        <section className="px-5 py-6 border-b-[6px] border-border-light">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[72px] h-[72px] rounded-full bg-point-light flex items-center justify-center text-[32px]">
              🍀
            </div>
            <div>
              <p className="text-[20px] font-semibold text-foreground">
                로그인이 필요해요
              </p>
              <p className="text-[15px] text-text-sub mt-1">
                할두에 가입하고 인증을 시작하세요
              </p>
            </div>
          </div>
          <button className="w-full min-h-[48px] bg-point text-white text-[17px] font-semibold rounded-xl">
            로그인하기
          </button>
        </section>

        {/* 등급 & 포인트 */}
        <section className="px-5 py-4 border-b border-border-light">
          <div className="flex gap-3">
            <div className="flex-1 bg-point-light rounded-2xl p-4 text-center">
              <p className="text-[14px] text-text-sub mb-1">현재 등급</p>
              <p className="text-[18px] font-semibold text-point">클래식</p>
            </div>
            <div className="flex-1 bg-tag-bg rounded-2xl p-4 text-center">
              <p className="text-[14px] text-text-sub mb-1">보유 포인트</p>
              <p className="text-[18px] font-semibold text-foreground">0P</p>
            </div>
            <div className="flex-1 bg-tag-bg rounded-2xl p-4 text-center">
              <p className="text-[14px] text-text-sub mb-1">초대장</p>
              <p className="text-[18px] font-semibold text-foreground">0장</p>
            </div>
          </div>
        </section>

        {/* 메뉴 */}
        <section className="px-5">
          {MENU_ITEMS.map(({ icon, label }) => (
            <button
              key={label}
              className="w-full flex items-center gap-4 py-4 border-b border-border-light min-h-[56px] text-left"
            >
              <span className="text-[22px]">{icon}</span>
              <span className="text-[17px] text-foreground">{label}</span>
              <span className="ml-auto text-icon text-[20px]">›</span>
            </button>
          ))}
        </section>
      </main>

      <BottomNav />
    </>
  );
}
