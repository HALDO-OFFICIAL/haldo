"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "홈", icon: "🏠" },
  { href: "/community", label: "소통방", icon: "💬" },
  { href: "/market", label: "마켓", icon: "🛒" },
  { href: "/mypage", label: "내 정보", icon: "👤" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border-light lg:hidden">
      <div className="max-w-4xl mx-auto flex">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex-1 flex flex-col items-center justify-center py-2 min-h-[60px] transition-colors ${
                isActive
                  ? "text-foreground font-bold"
                  : "text-text-default font-semibold"
              }`}
            >
              <span className={`text-2xl leading-none ${!isActive ? "grayscale opacity-50" : ""}`}>{tab.icon}</span>
              <span className="text-[20px] mt-1">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
