"use client";

import Link from "next/link";

export default function FeedHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border-light">
      <div className="flex items-center justify-between px-5 h-[56px]">
        <Link
          href="/"
          className="text-[20px] font-semibold text-point"
        >
          인증
        </Link>
        <Link
          href="/mypage"
          className="text-[20px] font-semibold text-foreground min-w-[48px] min-h-[48px] flex items-center justify-center"
        >
          MY
        </Link>
      </div>
    </header>
  );
}
