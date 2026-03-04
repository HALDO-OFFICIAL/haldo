"use client";

import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 -mt-4">
      {/* 로고 */}
      <div className="mb-12 text-center">
        <Image src="/logo.png" alt="할두" width={160} height={160} className="h-20 w-auto mx-auto mb-2" priority />
        <p className="text-[14px] text-text-sub">시니어를 위한 커뮤니티</p>
      </div>

      {/* 소셜 로그인 버튼 */}
      <div className="w-full max-w-sm space-y-3">
        <button
          onClick={() => alert("카카오 로그인은 준비중입니다.")}
          className="w-full flex items-center justify-center gap-3 py-4 bg-kakao text-[#3C1E1E] rounded-xl font-bold hover:brightness-95 active:scale-[0.98] transition-all min-h-[56px] text-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.8 5.16 4.5 6.54-.18.66-.66 2.4-.76 2.76-.12.48.18.48.36.36.15-.1 2.34-1.56 3.3-2.22.84.12 1.72.18 2.6.18 5.52 0 10-3.48 10-7.62C22 6.48 17.52 3 12 3z"
              fill="#3C1E1E"
            />
          </svg>
          카카오로 시작하기
        </button>

        <button
          onClick={() => alert("네이버 로그인은 준비중입니다.")}
          className="w-full flex items-center justify-center gap-3 py-4 bg-naver text-white rounded-xl font-bold hover:brightness-95 active:scale-[0.98] transition-all min-h-[56px] text-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M14.4 12.6L9.3 5H5v14h4.6v-7.6L14.7 19H19V5h-4.6v7.6z"
              fill="white"
            />
          </svg>
          네이버로 시작하기
        </button>
      </div>

      {/* 하단 링크 */}
      <div className="mt-8">
        <Link
          href="/"
          className="text-text-default hover:text-point transition-colors"
        >
          둘러보기 →
        </Link>
      </div>
    </div>
  );
}
