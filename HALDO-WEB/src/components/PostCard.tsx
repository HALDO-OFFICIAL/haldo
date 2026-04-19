import Image from "next/image";

interface PostCardProps {
  author: string;
  timeAgo: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
}

export default function PostCard({
  author,
  timeAgo,
  content,
  imageUrl,
  likes,
  comments,
}: PostCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {imageUrl && (
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={imageUrl}
            alt="게시글 이미지"
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-border-light flex items-center justify-center text-sm text-text-sub">
            {author[0]}
          </div>
          {/* 상품 대제목 스타일: Bold #111111 20pt */}
          <span className="font-bold text-foreground">{author}</span>
          {/* 상품 소제목 스타일: Regular #707070 14pt */}
          <span className="text-[14px] text-text-sub">{timeAgo}</span>
        </div>
        <p className="text-foreground leading-relaxed mb-3">{content}</p>
        <div className="flex items-center gap-4 text-[14px] text-icon">
          <button className="flex items-center gap-1 min-h-[48px] px-2 hover:text-point transition-colors">
            ❤️ <span>{likes}</span>
          </button>
          <button className="flex items-center gap-1 min-h-[48px] px-2 hover:text-point transition-colors">
            💬 <span>{comments}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
