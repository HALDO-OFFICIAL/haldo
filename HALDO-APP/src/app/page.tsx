"use client";

import { useState } from "react";
import FeedHeader from "@/components/FeedHeader";
import CertBox from "@/components/CertBox";
import FeedCard from "@/components/FeedCard";
import BottomNav from "@/components/BottomNav";

interface Post {
  id: number;
  author: string;
  avatarUrl: string;
  tierLevel: number;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  tag: string;
  isOwner: boolean;
}

const DUMMY_POSTS: Post[] = [
  {
    id: 1,
    author: "장막생활",
    avatarUrl: "https://picsum.photos/seed/user1/100/100",
    tierLevel: 2,
    content:
      "슬로우 조깅 클럽에서 석촌 호수 2km 뛰었어요~ 이제 자세 교정 받은 대로 뛰어야겠어요!",
    imageUrl: "https://picsum.photos/seed/jogging/600/400",
    likes: 15,
    comments: 7,
    tag: "건강",
    isOwner: false,
  },
  {
    id: 2,
    author: "복정이",
    avatarUrl: "https://picsum.photos/seed/user2/100/100",
    tierLevel: 1,
    content:
      "저희 집 근처 갈비 맛집 생겼어요.\n청기와 식당! 오늘 저녁 외식합니다.",
    likes: 4,
    comments: 2,
    tag: "추천",
    isOwner: false,
  },
  {
    id: 3,
    author: "해피맘",
    avatarUrl: "https://picsum.photos/seed/user3/100/100",
    tierLevel: 3,
    content:
      "오늘 아침 현미밥에 된장찌개, 고등어구이 해먹었어요. 건강한 한 끼 완성!",
    imageUrl: "https://picsum.photos/seed/food1/600/400",
    likes: 22,
    comments: 5,
    tag: "건강",
    isOwner: false,
  },
  {
    id: 4,
    author: "꽃보다엄마",
    avatarUrl: "https://picsum.photos/seed/user4/100/100",
    tierLevel: 1,
    content:
      "손주 어린이집 보내고 동네 한 바퀴 산책했어요. 날씨가 너무 좋아서 기분이 상쾌하네요~",
    likes: 8,
    comments: 3,
    tag: "수다",
    isOwner: false,
  },
  {
    id: 5,
    author: "테니스퀸",
    avatarUrl: "https://picsum.photos/seed/user5/100/100",
    tierLevel: 4,
    content:
      "할두 테니스 클럽 첫 모임 다녀왔습니다! 초보인데도 다들 너무 잘 가르쳐주셔서 감동이에요 🎾",
    imageUrl: "https://picsum.photos/seed/tennis/600/400",
    likes: 31,
    comments: 12,
    tag: "사람",
    isOwner: false,
  },
];

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>(DUMMY_POSTS);

  const handleNewPost = (newPost: { content: string; tag: string; imageUrl?: string }) => {
    const post: Post = {
      id: Date.now(),
      author: "나",
      avatarUrl: "https://picsum.photos/seed/me/100/100",
      tierLevel: 1,
      content: newPost.content,
      imageUrl: newPost.imageUrl,
      likes: 0,
      comments: 0,
      tag: newPost.tag,
      isOwner: true,
    };
    setPosts([post, ...posts]);
  };

  return (
    <>
      <FeedHeader />

      <main className="flex-1 pb-[80px]">
        <CertBox onPost={handleNewPost} />

        <div>
          {posts.map((post) => (
            <FeedCard
              key={post.id}
              author={post.author}
              avatarUrl={post.avatarUrl}
              tierLevel={post.tierLevel}
              content={post.content}
              imageUrl={post.imageUrl}
              likes={post.likes}
              comments={post.comments}
              tag={post.tag}
              isOwner={post.isOwner}
            />
          ))}
        </div>

        <div className="py-8 text-center text-text-default text-[15px]">
          더 많은 글을 불러오는 중...
        </div>
      </main>

      <BottomNav />
    </>
  );
}
