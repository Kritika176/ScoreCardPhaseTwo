import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormTwo } from "../FormTwo/FormTwo";
export const ModalFormTwo = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Part-II</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center justify-content-center">
        <h4>
          Add Co-Scholastic Feild
        </h4>
        </div>
        <div className="d-flex align-items-center justify-content-center">
        <FormTwo/>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};