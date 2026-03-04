"use client";

import { FontSizeProvider } from "@/contexts/FontSizeContext";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <FontSizeProvider>
      {!isLoginPage && (
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border-light">
          <div className="max-w-4xl mx-auto px-4 h-[120px] flex items-center justify-center">
            <Header />
          </div>
        </header>
      )}
      <main className="max-w-4xl mx-auto px-4 py-4">
        {children}
      </main>
      {/* <BottomNav /> */}
    </FontSizeProvider>
  );
}
