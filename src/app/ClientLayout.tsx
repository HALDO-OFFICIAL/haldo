"use client";

import { FontSizeProvider } from "@/contexts/FontSizeContext";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import DesktopNav from "@/components/DesktopNav";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <FontSizeProvider>
      {!isLoginPage && (
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border-light">
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
            <div className="flex items-center">
              <Header />
              <DesktopNav />
            </div>
          </div>
        </header>
      )}
      <main className="max-w-4xl mx-auto px-4 py-4">
        {children}
      </main>
      {!isLoginPage && <BottomNav />}
    </FontSizeProvider>
  );
}
