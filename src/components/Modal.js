import React, { useState } from "react";
import ModalForm from "./form/ModalForm";

export const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    dateOfBirth: "",
    area: "",
    email: "",
    phonenumber: "",
    occupation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to local storage
    console.log("FormData : " + formData.gender);
    localStorage.setItem("formData", JSON.stringify(formData));
    // Close the modal
    onClose();
  };

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
          <ModalForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};
