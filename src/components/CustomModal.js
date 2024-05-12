// import React from 'react'

// const CustomModal = () => {
//   return (
//     <div>CustomModal</div>
//   )
// }

// export default CustomModal

import React from "react";
import { Button, Modal } from "react-bootstrap";

const CustomModal = ({ show, handleClose }) => {
  console.log("Show : ", show);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
