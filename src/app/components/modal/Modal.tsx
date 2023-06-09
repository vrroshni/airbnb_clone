"use client";
import { useCallback, useEffect, useState } from "react";

interface ModalProps {
  isOpen?: boolean;
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  secondaryActions: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  disabled?: boolean;
  actionLabel: string;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  onSubmit,
  secondaryActions,
  body,
  footer,
  disabled,
  actionLabel,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryActions = useCallback(() => {
    if (disabled || !secondaryActions) {
      return;
    }
    secondaryActions();
  }, [disabled, secondaryActions]);
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
    justify-center
    items-center
    flex
    overflow-x-hidden
    overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    bg-neutral-800/70
    "
      >
        <div
          className="
    relative
    w-full
    md:w-4/6
    lg:w-3/6
    xl:w-2/5
    my-6
    mx-auto
    h-full
    lg:h-auto
    md:h-auto"
        >
{/* CONTENT */}

        </div>
      </div>
    </>
  );
};

export default Modal;
