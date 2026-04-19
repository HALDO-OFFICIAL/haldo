"use client";

import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

export default function FloatingButton() {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
    window.location.href = "sms:?body=안녕하세요, 상품 문의드립니다.";
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-24 right-4 lg:bottom-8 lg:right-8 z-40 w-16 h-16 bg-point text-white rounded-full shadow-lg hover:bg-point-dark active:scale-95 transition-all flex items-center justify-center"
        aria-label="문자 상담"
      >
        <span className="text-2xl">💬</span>
      </button>
      <ConfirmModal
        isOpen={showModal}
        title="문자 상담"
        message="문자 메시지로 상담을 시작하시겠습니까?"
        confirmText="네, 문자 보내기"
        cancelText="취소"
        onConfirm={handleConfirm}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
}
