"use client";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />
      <div className="relative bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
        {/* 주제 텍스트: Bold #111111 24pt */}
        <h2 className="text-[24px] font-bold text-foreground mb-2">{title}</h2>
        <p className="text-foreground mb-6 leading-relaxed">{message}</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl border border-border text-text-sub font-bold hover:bg-border-light active:scale-95 transition-all min-h-[48px]"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-point text-white font-bold hover:bg-point-dark active:scale-95 transition-all min-h-[48px]"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
