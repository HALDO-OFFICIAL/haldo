"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type FontLevel = 0 | 1 | 2;

const FONT_SIZES = [18, 20, 22] as const;
const FONT_LABELS = ["기본", "크게", "매우 크게"] as const;
const STORAGE_KEY = "haldo-font-level";

interface FontSizeContextType {
  fontLevel: FontLevel;
  fontSize: number;
  fontLabel: string;
  increase: () => void;
  decrease: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | null>(null);

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontLevel, setFontLevel] = useState<FontLevel>(0);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      const level = Number(saved) as FontLevel;
      if (level >= 0 && level <= 2) setFontLevel(level);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(fontLevel));
    document.documentElement.style.fontSize = `${FONT_SIZES[fontLevel]}px`;
  }, [fontLevel]);

  const increase = () => setFontLevel((prev) => Math.min(prev + 1, 2) as FontLevel);
  const decrease = () => setFontLevel((prev) => Math.max(prev - 1, 0) as FontLevel);

  return (
    <FontSizeContext.Provider
      value={{
        fontLevel,
        fontSize: FONT_SIZES[fontLevel],
        fontLabel: FONT_LABELS[fontLevel],
        increase,
        decrease,
      }}
    >
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (!context) throw new Error("useFontSize must be used within FontSizeProvider");
  return context;
}
