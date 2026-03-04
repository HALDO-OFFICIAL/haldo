"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="할두" width={80} height={80} className="h-[100px] w-auto" priority />
    </Link>
  );
}
