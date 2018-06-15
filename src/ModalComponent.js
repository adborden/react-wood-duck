import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const propTypes = {
  modalBody: PropTypes.any,
  modalFooter: PropTypes.any,
  modalSize: PropTypes.string,
  modalTitle: PropTypes.string,
  showModal: PropTypes.bool,
  closeModal: PropTypes.any,
};
const ModalComponent = ({
  modalBody,
  closeModal,
  modalFooter,
  modalSize,
  modalTitle,
  showModal,
}) => {
  return (
    <div className="container">
      <Modal show={showModal} onHide={closeModal} bsSize={modalSize}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>{modalFooter}</Modal.Footer>
      </Modal>
    </div>
  );
};

ModalComponent.propTypes = propTypes;

export default ModalComponent;
