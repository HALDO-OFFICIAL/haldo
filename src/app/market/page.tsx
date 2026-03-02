"use client";

import Image from "next/image";
import FloatingButton from "@/components/FloatingButton";

const dummyProducts = [
  {
    id: 1,
    name: "유기농 꿀 1kg",
    price: "35,000원",
    seller: "꿀벌농장",
    imageUrl: "https://picsum.photos/seed/honey/400/400",
    tag: "인기",
  },
  {
    id: 2,
    name: "수제 된장 500g",
    price: "18,000원",
    seller: "전통장마을",
    imageUrl: "https://picsum.photos/seed/doenjang/400/400",
    tag: "추천",
  },
  {
    id: 3,
    name: "건강 베개",
    price: "45,000원",
    seller: "편안한잠",
    imageUrl: "https://picsum.photos/seed/pillow/400/400",
    tag: "신상",
  },
  {
    id: 4,
    name: "보온 무릎담요",
    price: "25,000원",
    seller: "따뜻한집",
    imageUrl: "https://picsum.photos/seed/blanket/400/400",
  },
  {
    id: 5,
    name: "현미 찹쌀 2kg",
    price: "12,000원",
    seller: "우리쌀농장",
    imageUrl: "https://picsum.photos/seed/rice/400/400",
  },
  {
    id: 6,
    name: "국산 참기름 300ml",
    price: "22,000원",
    seller: "고소한기름집",
    imageUrl: "https://picsum.photos/seed/oil/400/400",
    tag: "인기",
  },
];

export default function MarketPage() {
  return (
    <div className="space-y-4">
      {/* 주제 텍스트: Bold #111111 24pt */}
      <h2 className="text-[24px] font-bold text-foreground">마켓 🛒</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {dummyProducts.map((product) => (
          <article
            key={product.id}
            className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="relative aspect-square">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.tag && (
                <span className="absolute top-2 left-2 px-2 py-1 bg-point text-white text-xs font-bold rounded-lg">
                  {product.tag}
                </span>
              )}
            </div>
            <div className="p-3">
              {/* 상품 대제목: Bold #111111 20pt */}
              <h3 className="font-bold text-foreground text-[20px] truncate">{product.name}</h3>
              <p className="text-point font-bold text-[20px] mt-1">{product.price}</p>
              {/* 상품 소제목: Regular #707070 14pt */}
              <p className="text-[14px] font-normal text-text-sub mt-1">{product.seller}</p>
            </div>
          </article>
        ))}
      </div>

      <FloatingButton />
    </div>
  );
}
