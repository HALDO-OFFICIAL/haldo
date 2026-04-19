"use client";

import { useState } from "react";

interface FeedCardProps {
  author: string;
  avatarUrl: string;
  tierLevel: number; // 1~4 (클로버 개수)
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  tag: string;
  isOwner?: boolean;
}

export default function FeedCard({
  author,
  avatarUrl,
  tierLevel,
  content,
  imageUrl,
  likes,
  comments,
  tag,
  isOwner = false,
}: FeedCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const clovers = "🍀".repeat(Math.min(tierLevel, 4));

  return (
    <article className="px-5 py-4 border-b border-border-light">
      {/* 헤더: 아바타 + 닉네임 + 배지 + 수정/삭제 */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={avatarUrl}
          alt={author}
          className="w-[48px] h-[48px] rounded-full object-cover border border-border"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-[16px] font-semibold text-foreground truncate">
              {author}
            </span>
            <span className="text-[14px]">{clovers}</span>
          </div>
        </div>
        {isOwner && (
          <button className="text-[14px] text-text-sub border border-border rounded-lg px-3 py-1 min-h-[36px]">
            수정/삭제
          </button>
        )}
      </div>

      {/* 본문 */}
      <div className="bg-tag-bg rounded-2xl p-4 mb-3">
        <p className="text-[17px] leading-relaxed text-foreground whitespace-pre-wrap">
          {content}
        </p>
      </div>

      {/* 이미지 */}
      {imageUrl && (
        <div className="mb-3 rounded-2xl overflow-hidden">
          <img
            src={imageUrl}
            alt="인증 사진"
            className="w-full object-cover max-h-[400px]"
          />
        </div>
      )}

      {/* 하단: 좋아요 + 댓글 + 공유 + 태그 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* 좋아요 */}
          <button
            onClick={handleLike}
            className="flex items-center gap-1 min-h-[44px] min-w-[44px]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={liked ? "#ff4757" : "none"}
              stroke={liked ? "#ff4757" : "#c3c5c7"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="text-[15px] text-text-sub">{likeCount}</span>
          </button>

          {/* 댓글 */}
          <button className="flex items-center gap-1 min-h-[44px] min-w-[44px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c3c5c7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="text-[15px] text-text-sub">{comments}</span>
          </button>

          {/* 공유 */}
          <button className="flex items-center min-h-[44px] min-w-[44px]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c3c5c7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9" />
              <path d="M21 3L9 15" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </div>

        {/* 태그 */}
        <span className="bg-point text-white text-[14px] font-medium px-4 py-1.5 rounded-full">
          #{tag}
        </span>
      </div>
    </article>
  );
}
