import React from "react";
import ModalForm from "./form/ModalForm";

export const Modal = ({ isOpen, onClose }) => {
  return (
    <div className="modalCustom">
      <div className="modalCustom-content rounded">
        <div className="custom-modal-header">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Create User</h2>
            <span className="close" onClick={onClose}>
              &times;
            </span>
          </div>
          <hr className="mt-0 w-100"></hr>
        </div>
        <div className="custom-modal-body">
          <ModalForm />
        </div>
      </div>
    </div>
  );
};
