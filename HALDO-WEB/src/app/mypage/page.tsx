import Link from "next/link";

const menuItems = [
  { label: "내가 쓴 글", icon: "📝", href: "#" },
  { label: "좋아요한 글", icon: "❤️", href: "#" },
  { label: "주문 내역", icon: "📦", href: "#" },
  { label: "알림 설정", icon: "🔔", href: "#" },
  { label: "고객센터", icon: "📞", href: "#" },
];

export default function MyPage() {
  return (
    <div className="space-y-6">
      {/* 주제 텍스트: Bold #111111 24pt */}
      <h2 className="text-[24px] font-bold text-foreground">내 정보 👤</h2>

      {/* 프로필 카드 */}
      <section className="bg-white rounded-2xl border border-border p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-border-light flex items-center justify-center text-2xl">
            👤
          </div>
          <div>
            {/* 상품 대제목 스타일: Bold #111111 20pt */}
            <p className="text-[20px] font-bold text-foreground">로그인이 필요합니다</p>
            {/* 상품 소제목 스타일: Regular #707070 14pt */}
            <p className="text-[14px] text-text-sub">로그인하고 할두를 시작하세요</p>
          </div>
        </div>
        <Link
          href="/login"
          className="mt-4 block w-full py-3 text-center bg-point text-white rounded-xl font-bold hover:bg-point-dark active:scale-95 transition-all min-h-[48px]"
        >
          로그인하기
        </Link>
      </section>

      {/* 메뉴 리스트 */}
      <section className="bg-white rounded-2xl border border-border overflow-hidden">
        {menuItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-5 py-4 hover:bg-point-light transition-colors min-h-[56px] ${
              index < menuItems.length - 1 ? "border-b border-border-light" : ""
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-foreground font-medium">{item.label}</span>
            <span className="ml-auto text-icon">›</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
