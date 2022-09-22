import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./FormThree.css";
import { partThreeSchema } from "../../schemas/PartThreeSchema";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPartThreeData } from "../.././../Redux/PartThree/action";
import { dropDownMenu } from "../Constants/FormOneConstants";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
export const FormThree = ({ formOneStyle }) => {
  const [error, setError] = useState(false);
  const [showError,setShowError] = useState("");
  const [isError,setIsError] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("");
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const [listData, setListData] = useState([...dropDownMenu]);
  const oneData = useSelector((state) => state.part_one.newData);
  console.log("one",oneData)
  

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
     wd : "",
     dp: "",
    },

    validationSchema: partThreeSchema,
    onSubmit: (values) => {
        console.log("v",values)
        dispatch(getPartThreeData(values));
        resetForm({ values: "" })
        if(values.wd<values.dp){
            setShowError("No of Working days should be greater than no of days present")
            setIsError(true);
        }
        else{
            setIsError(false);
        }
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
      if(values.wd!==""){
        console.log("one",oneData)
        
     }
    }
    setError(true);
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit} className="formOneDiv">
        
        <div className="feildDiv">
          <label>No of Working Days : </label>
          <input
            value={values.wd}
            type="number"
            name="wd"
            onChange={handleChange}
            style={{ height: "35px" }}
          />
          {errors.wd && error ? (
            <span className="error">{`* ${errors.wd}`}</span>
          ) : null}
        </div>
        <div style={{ padding: "5px" }} className="feildDiv">
          <label>No of Days present : </label>
          <input
            value={values.dp}
            type="number"
            name="dp"
            style={{ height: "35px" }}
            onChange={handleChange}
            onClick = {() => setShowError("")}
          />
          {errors.dp && error ? (
            <span className="error">{`* ${errors.dp}`}</span>
          ) : null}
          {isError  ? (
            <span className="error">{` ${showError}`}</span>
          ) : ""}
        </div>
       <div className="submitContainer">
          <Button variant="primary" type="submit" onClick={handleButtonSubmit}>
            Submit
          </Button>
          {!isError ?
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>Submitted Succesfully .</Modal.Body>
            <Modal.Footer>
              
              <Button variant="primary" onClick={handleClose}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>:""}
        </div>
        
      </Form>
    </div>
  );
};
