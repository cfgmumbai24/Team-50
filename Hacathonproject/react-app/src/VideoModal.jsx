import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This is important for accessibility

const VideoModal = ({ isOpen, onRequestClose, videoUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="flex justify-end">
        <button onClick={onRequestClose} className="text-white text-2xl">&times;</button>
      </div>
      <div className="flex justify-center items-center h-full">
        <video controls className="w-full">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Modal>
  );
};

export default VideoModal;
