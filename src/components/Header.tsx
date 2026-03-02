"use client";

import Image from "next/image";
import { useFontSize } from "@/contexts/FontSizeContext";

export default function Header() {
  const { increase, decrease, fontLabel } = useFontSize();

  return (
    <div className="flex items-center gap-4">
      <Image src="/logo.png" alt="할두" width={80} height={80} className="h-8 w-auto" priority />
      <div className="flex items-center gap-1 lg:ml-auto">
        <button
          onClick={decrease}
          className="w-10 h-10 flex items-center justify-center rounded-lg text-text-sub hover:bg-point-light active:bg-point-light transition-colors font-bold"
          aria-label="글씨 작게"
        >
          A-
        </button>
        <span className="text-xs text-text-default min-w-[3.5rem] text-center">
          {fontLabel}
        </span>
        <button
          onClick={increase}
          className="w-10 h-10 flex items-center justify-center rounded-lg text-text-sub hover:bg-point-light active:bg-point-light transition-colors font-bold"
          aria-label="글씨 크게"
        >
          A+
        </button>
      </div>
    </div>
  );
}
