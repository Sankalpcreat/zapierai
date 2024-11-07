import React from 'react';
import Modal from 'react-modal';

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-container bg-white p-6 rounded-md shadow-lg max-w-md mx-auto"
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
      <button
        onClick={onClose}
        className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
      >
        Close
      </button>
    </Modal>
  );
};

export default ModalContainer;
