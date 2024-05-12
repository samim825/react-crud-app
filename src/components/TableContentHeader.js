import React, { useState } from "react";
import { Modal } from "./Modal";
const TableContentHeader = ({ headingTitle, btnLabel }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h2>{headingTitle}</h2>

        {showModal && <Modal onClose={handleCloseModal} />}

        {btnLabel && (
          <button
            type="button"
            onClick={handleOpenModal}
            className="btn btn-primary w-25 dtn-block"
          >
            {btnLabel}
          </button>
        )}
      </div>
    </>
  );
};

export default TableContentHeader;
