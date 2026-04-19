"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "홈", icon: "🏠" },
  { href: "/community", label: "소통방", icon: "💬" },
  { href: "/market", label: "마켓", icon: "🛒" },
  { href: "/mypage", label: "내 정보", icon: "👤" },
];

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1 ml-8">
      {tabs.map((tab) => {
        const isActive =
          tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors min-h-[48px] text-[20px] ${
              isActive
                ? "text-foreground font-bold"
                : "text-text-default font-semibold hover:text-text-sub"
            }`}
          >
            <span className={!isActive ? "grayscale opacity-50" : ""}>{tab.icon}</span>
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
