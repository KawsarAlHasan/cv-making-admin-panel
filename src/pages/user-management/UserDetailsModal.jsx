import React, { useState } from "react";
import { Button, Modal } from "antd";
import cvImage from "../../assets/cv.png";

function UserDetailsModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={showModal}
        className="px-3 py-1 rounded-full text-xs font-semibold border"
        style={{
          color: "#22c55e",
          borderColor: "#bbf7d0",
          background: "#f0fdf4",
        }}
      >
        View Profile
      </button>

      <Modal
        title="Niels Profile"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="border border-gray-200">
          <img src={cvImage} alt="cv" />
        </div>
      </Modal>
    </div>
  );
}

export default UserDetailsModal;
