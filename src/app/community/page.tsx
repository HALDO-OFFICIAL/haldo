"use client";

import PostCard from "@/components/PostCard";
import CommentInput from "@/components/CommentInput";

const dummyPosts = [
  {
    id: 1,
    author: "김영숙",
    timeAgo: "30분 전",
    content: "오늘 아침에 동네 산책하다가 벚꽃이 피기 시작한 걸 봤어요. 봄이 오고 있네요! 🌸",
    imageUrl: "https://picsum.photos/seed/cherry/800/600",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    author: "박정호",
    timeAgo: "2시간 전",
    content: "손주가 그려준 그림이에요. 할아버지 닮았다고 하네요. 😊",
    imageUrl: "https://picsum.photos/seed/drawing/800/600",
    likes: 45,
    comments: 12,
  },
  {
    id: 3,
    author: "이순자",
    timeAgo: "5시간 전",
    content: "오늘 만든 된장찌개 레시피 공유합니다. 두부는 꼭 국산으로 쓰세요!",
    likes: 18,
    comments: 6,
  },
  {
    id: 4,
    author: "최동수",
    timeAgo: "어제",
    content: "주말에 등산 동호회 모임 있습니다. 관심 있으신 분 댓글 남겨주세요!",
    imageUrl: "https://picsum.photos/seed/mountain/800/600",
    likes: 32,
    comments: 15,
  },
];

export default function CommunityPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {/* 주제 텍스트: Bold #111111 24pt */}
        <h2 className="text-[24px] font-bold text-foreground">소통방 💬</h2>
        <button className="px-4 py-2 bg-point text-white rounded-xl font-bold hover:bg-point-dark active:scale-95 transition-all min-h-[48px]">
          글쓰기 ✏️
        </button>
      </div>

      <div className="space-y-4">
        {dummyPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      <div className="fixed bottom-[60px] left-0 right-0 lg:static lg:mt-4">
        <div className="max-w-4xl mx-auto">
          <CommentInput onSubmit={(text) => alert(`댓글 등록: ${text}`)} />
        </div>
      </div>
    </div>
  );
}
