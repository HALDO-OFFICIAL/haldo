"use client";

import { useState, useRef } from "react";
import ConfirmModal from "./ConfirmModal";

const TAGS = ["건강", "사람", "추천", "수다"];

interface NewPost {
  content: string;
  tag: string;
  imageUrl?: string;
}

interface CertBoxProps {
  onPost?: (post: NewPost) => void;
}

export default function CertBox({ onPost }: CertBoxProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [isWriting, setIsWriting] = useState(false);

  // 모달 상태
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const maxLength = 300;

  const handleCertClick = () => {
    if (!content.trim()) return;
    if (!selectedTag) return;
    // Step 1: 사진 첨부 질문
    setShowPhotoModal(true);
  };

  const handlePhotoYes = () => {
    setShowPhotoModal(false);
    fileInputRef.current?.click();
  };

  const handlePhotoNo = () => {
    setShowPhotoModal(false);
    setSelectedImage(null);
    // 사진 없이 바로 확인 모달
    setShowConfirmModal(true);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
    }
    // 사진 선택 후 확인 모달
    setShowConfirmModal(true);
    // 파일 입력 초기화 (같은 파일 재선택 가능)
    e.target.value = "";
  };

  const handleConfirm = () => {
    setShowConfirmModal(false);
    onPost?.({
      content: content.trim(),
      tag: selectedTag!,
      imageUrl: selectedImage ?? undefined,
    });
    // 초기화
    setContent("");
    setSelectedTag(null);
    setSelectedImage(null);
    setIsWriting(false);
  };

  const handleConfirmCancel = () => {
    setShowConfirmModal(false);
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
      setSelectedImage(null);
    }
  };

  return (
    <>
      <section className="px-5 py-5 border-b-[6px] border-border-light">
        <div className="flex items-start gap-3">
          {/* 마스코트 */}
          <div className="flex flex-col items-center shrink-0">
            <span className="text-[40px] leading-none">🍀</span>
            <span className="text-[13px] text-text-sub mt-1">할두 조카</span>
          </div>

          {/* 인증 입력 영역 */}
          <div className="flex-1">
            {!isWriting ? (
              /* 비활성 상태: 탭하면 글쓰기 모드 */
              <button
                onClick={() => setIsWriting(true)}
                className="w-full text-left"
              >
                <p className="text-[18px] text-foreground font-medium mb-3">
                  오늘은 무엇이 자랑스럽나요?
                </p>
                <div className="h-px bg-border mb-3" />
              </button>
            ) : (
              /* 활성 상태: 텍스트 입력 */
              <div className="mb-3">
                <textarea
                  value={content}
                  onChange={(e) => {
                    if (e.target.value.length <= maxLength) {
                      setContent(e.target.value);
                    }
                  }}
                  placeholder="오늘은 무엇이 자랑스럽나요?"
                  className="w-full min-h-[100px] p-3 text-[17px] leading-relaxed text-foreground bg-tag-bg rounded-2xl border border-border-light resize-none focus:outline-none focus:border-point placeholder:text-text-default"
                  autoFocus
                />
                <p className="text-right text-[14px] text-text-sub mt-1">
                  <span className={content.length >= maxLength ? "text-red-500 font-semibold" : ""}>
                    {content.length}
                  </span>
                  /{maxLength}자
                </p>
              </div>
            )}

            {/* 선택된 이미지 미리보기 */}
            {selectedImage && (
              <div className="relative mb-3 rounded-2xl overflow-hidden">
                <img
                  src={selectedImage}
                  alt="첨부 사진"
                  className="w-full max-h-[200px] object-cover"
                />
                <button
                  onClick={() => {
                    URL.revokeObjectURL(selectedImage);
                    setSelectedImage(null);
                  }}
                  className="absolute top-2 right-2 w-[32px] h-[32px] bg-black/50 text-white rounded-full flex items-center justify-center text-[18px]"
                >
                  ×
                </button>
              </div>
            )}

            {/* 태그 선택 */}
            <div className="flex gap-2 flex-wrap mb-4">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`
                    min-h-[40px] px-4 rounded-full text-[15px] font-medium
                    border transition-colors
                    ${
                      selectedTag === tag
                        ? "bg-point text-white border-point"
                        : "bg-white text-foreground border-border"
                    }
                  `}
                >
                  #{tag}
                </button>
              ))}
            </div>

            {/* 인증하기 버튼 */}
            <button
              onClick={handleCertClick}
              disabled={!content.trim() || !selectedTag}
              className={`
                w-full min-h-[48px] text-[17px] font-semibold rounded-xl transition-colors
                ${
                  content.trim() && selectedTag
                    ? "bg-point text-white hover:bg-point-dark"
                    : "bg-border-light text-text-default cursor-not-allowed"
                }
              `}
            >
              인증하기
            </button>
          </div>
        </div>
      </section>

      {/* 숨겨진 파일 입력 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />

      {/* 모달 1: 사진 첨부 */}
      <ConfirmModal
        isOpen={showPhotoModal}
        title="사진 첨부하시겠어요? (1장)"
        confirmText="네"
        cancelText="아니요"
        onConfirm={handlePhotoYes}
        onCancel={handlePhotoNo}
      />

      {/* 모달 2: 등록 확인 */}
      <ConfirmModal
        isOpen={showConfirmModal}
        title="인증글 등록할게요!"
        confirmText="네"
        cancelText="취소"
        onConfirm={handleConfirm}
        onCancel={handleConfirmCancel}
      />
    </>
  );
}
