"use client";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  isOpen,
  title,
  confirmText = "네",
  cancelText = "취소",
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-8">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onCancel}
      />

      {/* 모달 */}
      <div className="relative bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-xl">
        <div className="px-6 pt-8 pb-5">
          <p className="text-[19px] font-semibold text-foreground text-center leading-relaxed">
            {title}
          </p>
        </div>

        <div className="flex border-t border-border">
          <button
            onClick={onCancel}
            className="flex-1 min-h-[52px] text-[17px] text-text-sub border-r border-border"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 min-h-[52px] text-[17px] font-semibold text-point"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
