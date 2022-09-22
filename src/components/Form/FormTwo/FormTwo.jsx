import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./FormTwo.css";
import { useState } from "react";
import { partTwoSchema } from "../../schemas/PartTwoSchema";
import { useDispatch } from "react-redux";
import { getPartTwoData } from "../../../Redux/PartTwo/action";
export const FormTwo = ({ formStyle }) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { values, errors, resetForm ,handleChange, handleSubmit} = useFormik({
    initialValues: {
      subject: "",
      grade : "",
    },
    validationSchema : partTwoSchema,
    onSubmit: (values) => {
     dispatch(getPartTwoData(values));
    resetForm({ values: "" })
    }
  });
  console.log(errors)
  return (
    <div>
       <Form onSubmit={handleSubmit} className="formTwoDiv">
        <div style={{ padding: "4px" }}>
          <Form.Select aria-label="Default select example" name="subject" onChange={handleChange}>
            <option>Select Subject</option>
            <option value="development and maturity" disabled={values.subject === "development and maturity"}>
              Development and Maturity
            </option>
            <option value="responsibilty">Responsibilty</option>
            <option value="self confidence">Self Confidence</option>
            <option value="self confidence">Hard Work</option>
            <option value="self confidence">Music</option>
            <option value="self confidence">Discipline</option>
            <option value="self confidence">Craft</option>
          </Form.Select>
          
          {errors.subject && error ? (
            <span className="error">{`* ${errors.subject}`}</span>
          ) : null}
        </div>
        <div style={{ padding: "4px" }}>
          <Form.Select aria-label="Default select example" name="grade" onChange={handleChange}>
            <option>Select Grade</option>
            <option value="a+" >
              A+
            </option>
            <option value="a" >
              A
            </option>
            <option value="b+">
              B+
            </option>
            <option value="b">
              B
            </option>
            <option value="c+">
              C+
            </option>
            <option value="c">
              C
            </option>
            <option value="d">
              D
            </option>
            
          </Form.Select>
          
          {errors.grade && error ? (
            <span className="error">{`* ${errors.grade}`}</span>
          ) : (
            ""
          )}
        </div>
        
        <div className="submitContainer">
          <Button
            variant="primary"
            type="submit"
            onClick = {() => setError(true)}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};