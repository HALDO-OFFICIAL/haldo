"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", icon: "🏠", label: "홈" },
  { href: "/search", icon: "🔍", label: "검색" },
  { href: "/write", icon: "✏️", label: "글쓰기" },
  { href: "/market", icon: "🛍️", label: "마켓" },
  { href: "/mypage", icon: "👤", label: "내 정보" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
      <div className="mx-auto max-w-lg flex items-center justify-around h-[64px]">
        {NAV_ITEMS.map(({ href, icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`
                flex flex-col items-center justify-center
                min-w-[56px] min-h-[48px] gap-0.5
                transition-colors
                ${isActive ? "text-point" : "text-icon"}
              `}
            >
              <span className="text-[22px]">{icon}</span>
              <span className={`text-[11px] font-medium ${isActive ? "text-point" : "text-text-sub"}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
