import "./FormButton.css";
import Button from "react-bootstrap/Button";
export const FormButton = () => {
  return (
    <div className="mainContainer">
       <div className="cross">
        X
      </div>
      <div className="buttonContainer">
        <Button variant="primary" class="btn btn-danger">
          Add Scholastic Area
        </Button>
        <Button variant="primary">Add Co-Scholastic Area</Button>
        <Button variant="primary">Add Attendance</Button>
      </div>
      
    </div>
  )
}
