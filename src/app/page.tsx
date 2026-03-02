import Link from "next/link";

const quickLinks = [
  { href: "/community", icon: "💬", label: "소통방", desc: "이웃과 소통해요" },
  { href: "/market", icon: "🛒", label: "마켓", desc: "좋은 상품 구경하기" },
  { href: "/mypage", icon: "👤", label: "내 정보", desc: "프로필 관리" },
];

const announcements = [
  { id: 1, title: "할두 서비스가 오픈했습니다!", date: "2026.03.02" },
  { id: 2, title: "첫 가입 이벤트 진행중", date: "2026.03.02" },
];

export default function Home() {
  return (
    <div className="space-y-6">
      {/* 메인 인사 섹션 - 메인텍스트: Bold #111111 30pt */}
      <section className="bg-point-light rounded-2xl p-6">
        <h2 className="text-[30px] font-bold text-foreground mb-2">
          안녕하세요! 👋
        </h2>
        <p className="text-text-sub">
          오늘도 할두와 함께 즐거운 하루 보내세요.
        </p>
      </section>

      {/* 바로가기 - 주제 텍스트: Bold #111111 24pt */}
      <section>
        <h3 className="text-[24px] font-bold text-foreground mb-3">바로가기</h3>
        <div className="grid grid-cols-3 gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-border hover:border-point hover:shadow-md transition-all min-h-[100px] justify-center"
            >
              <span className="text-3xl">{link.icon}</span>
              <span className="font-bold text-foreground text-[20px]">{link.label}</span>
              <span className="text-[14px] text-text-sub text-center">{link.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 공지사항 - 주제 텍스트: Bold #111111 24pt */}
      <section>
        <h3 className="text-[24px] font-bold text-foreground mb-3">📢 공지사항</h3>
        <div className="space-y-2">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-border"
            >
              <span className="text-foreground font-medium">{item.title}</span>
              <span className="text-[14px] text-text-sub shrink-0 ml-4">{item.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
