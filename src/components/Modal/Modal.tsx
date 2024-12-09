import React from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children,className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className} w-full`}>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-SecondPrimary uppercase">{title}</h3>
          <button
            onClick={onClose}
            className="text-primary focus:outline-none text-4xl"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
