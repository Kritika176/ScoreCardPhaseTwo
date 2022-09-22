import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./FormOne.css";
import { partOneSchema } from "../../schemas/PartOneSchema";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPartOneData } from "../.././../Redux/PartOne/action";
import { dropDownMenu } from "../Constants/FormOneConstants";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
export const FormOne = ({ formOneStyle }) => {
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("");
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const [listData, setListData] = useState([...dropDownMenu]);
  const oneData = useSelector((state) => state.part_one.newData);
  const [initialValues, setInitialValues] = useState({
    subject: "",
    fa: "",
    oral_one: "",
    sa: "",
    oral_two: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const editValues = useSelector((state) => state.part_one.editValues);
  const partSub = useSelector((state) => state.part_one.subjects);
  console.log("ps",partSub)
  
  // useEffect(() => {
  //   console.log("in",ginitialValues)
    
    
  // },[initialValues])
  const { values, errors, resetForm, handleChange, handleSubmit } = useFormik({
    initialValues: {
      subject: "",
      fa: "",
      oral_one: "",
      sa: "",
      oral_two: "",
    },

    validationSchema: partOneSchema,
    onSubmit: (values) => {
      setSelected(values.subject);
    
      setUpdate(true);
      
   
      resetForm();
    },
  });
  useEffect(() => {
    const updatedData = listData.filter((e) => e.value !== selected);
    setListData([...updatedData]);
  }, []);
  const handleButtonSubmit = () => {
    if (Object.keys(errors).length === 0) {
      handleShow();
      if(values.fa!==""){
        console.log("one",oneData)
        dispatch(getPartOneData([values,...oneData]))
     }
    }
    setError(true);
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit} className="formOneDiv">
        <div style={{ padding: "4px" }}>
          <Form.Select
            aria-label="Default select example"
            name="subject"
            onChange={handleChange}
            style={{ border: "1px solid black", outline: "none" }}
            className="inputStyle text-uppercase"
          >
           {editValues.sub ? <option>{editValues.sub}</option>:<option>Select subject</option>}
            {listData.map((e, i) => (
              <option
                key={i}
                value={e.value}
                disabled={e.value === values.subject}
              >
                {e.label}
              </option>
            ))}
          </Form.Select>

          {errors.subject && error ? (
            <span className="error">{`* ${errors.subject}`}</span>
          ) : null}
        </div>
        <div className="feildDiv">
          <label>FA Score : </label>
          <input
            value={values.fa}
            type="number"
            name="fa"
            onChange={handleChange}
            style={{ height: "35px" }}
          />
          {errors.fa && error ? (
            <span className="error">{`* ${errors.fa}`}</span>
          ) : null}
        </div>
        <div style={{ padding: "5px" }} className="feildDiv">
          <label>Oral Score : </label>
          <input
            value={values.oral1}
            type="number"
            name="oral_one"
            style={{ height: "35px" }}
            onChange={handleChange}
          />
          {errors.oral_one && error ? (
            <span className="error">{`* ${errors.oral_one}`}</span>
          ) : null}
        </div>
        <div style={{ padding: "5px" }} className="feildDiv">
          <label>SA Score : </label>
          <input
            value={values.sa}
            type="number"
            name="sa"
            style={{ height: "35px" }}
            onChange={handleChange}
          />
          {errors.sa && error ? (
            <span className="error">{`* ${errors.sa}`}</span>
          ) : null}
        </div>
        <div style={{ padding: "5px" }} className="feildDiv">
          <label>Oral Score : </label>
          <input
            value={values.oral2}
            type="number"
            name="oral_two"
            style={{ height: "35px" }}
            onChange={handleChange}
          />
          {errors.oral_two && error ? (
            <span className="error">{`* ${errors.oral_two}`}</span>
          ) : null}
        </div>
        <div className="submitContainer">
          <Button variant="primary" type="submit" onClick={handleButtonSubmit}>
            Submit
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>Submitted Succesfully .</Modal.Body>
            <Modal.Footer>
              
              <Button variant="primary" onClick={handleClose}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Form>
    </div>
  );
};
