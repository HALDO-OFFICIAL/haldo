"use client";

import { useState } from "react";

interface CommentInputProps {
  onSubmit?: (text: string) => void;
}

export default function CommentInput({ onSubmit }: CommentInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() && onSubmit) {
      onSubmit(text.trim());
      setText("");
    }
  };

  return (
    <div className="flex items-center gap-2 p-3 bg-white border-t border-border-light">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="댓글을 입력하세요..."
        className="flex-1 px-4 py-3 rounded-xl bg-border-light border border-border text-foreground placeholder:text-text-default focus:outline-none focus:ring-2 focus:ring-point min-h-[48px]"
      />
      <button
        onClick={handleSubmit}
        className="px-5 py-3 bg-point text-white rounded-xl font-bold hover:bg-point-dark active:scale-95 transition-all min-h-[48px]"
      >
        등록
      </button>
    </div>
  );
}
