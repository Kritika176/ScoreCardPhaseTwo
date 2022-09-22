import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormThree } from "../FormThree/FormThree";
export const ModalFormThree = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Part-III</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center justify-content-center">
        <h4>
          Add Attendance
        </h4>
        </div>
        <div className="d-flex align-items-center justify-content-center">
        <FormThree/>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};