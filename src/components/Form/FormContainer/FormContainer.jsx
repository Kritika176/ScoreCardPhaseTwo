import "./FormContainer.css";
import React from "react";
import { FormOne } from "./../FormOne/FormOne";
import { FormTwo } from "../FormTwo/FormTwo";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { ModalFormOne } from "../ModalFormOne/ModalFormOne";
import { ModalFormTwo } from "../ModalFormTwo/ModalFormTwo";
import {ModalFormThree } from "../ModalFormThree/ModalFormThree";
export const FormContainer = ({
  getStyle,
  formContainerStyle,
  formFunction,
  buttonStyle,
}) => {
  const showFormOne = () => {
    setFormOneStyle({ display: "block" });
    setFormTwoStyle({ display: "none" });
    formFunction({
      display: "none",
    });
  };
  const showFormTwo = () => {
    setFormTwoStyle({ display: "block" });
  };
  const showFormThree = () => {
    setFormTwoStyle({ display: "block" });
  };
  const [formOneStyle, setFormOneStyle] = useState({ display: "none" });
  const [formTwoStyle, setFormTwoStyle] = useState({ display: "none" });
  const [formThreeStyle, setFormThreeStyle] = useState({ display: "none" });
  const setStyle = () => {
    getStyle(5);
    formFunction({
      display: "none",
    });
  };
  const [modalShowOne, setModalShowOne] = React.useState(false);
  const [modalShowTwo, setModalShowTwo] = React.useState(false);
  const [modalShowThree, setModalShowThree] = React.useState(false);

  const handleSubmit = () => {
    setModalShowOne(true);
  };
  const handleSubmitTwo = () => {
    setModalShowTwo(true);
  };
  const handleSubmitThree = () => {
    setModalShowThree(true);
  };
  return (
    <>
      <div className="formDiv" style={formContainerStyle}>
        <div className="cross" onClick={setStyle}>
          X
        </div>
        <div className="buttonContainer" >
          <Button variant="primary" onClick={handleSubmit}>
            Add Scholastic Area
          </Button>
          <Button variant="primary" onClick={handleSubmitTwo}>
            Add Co-Scholastic Area
          </Button>
          <Button variant="primary" onClick={handleSubmitThree}>Add Attendance</Button>
        </div>
        <div>
          <ModalFormOne
            show={modalShowOne}
            onHide={() => setModalShowOne(false)}
          />
        </div>
        <div>
          <ModalFormTwo
            show={modalShowTwo}
            onHide={() => setModalShowTwo(false)}
          />
        </div>
        <div>
          <ModalFormThree
            show={modalShowThree}
            onHide={() => setModalShowThree(false)}
          />
        </div>
      </div>
    </>
  );
};
