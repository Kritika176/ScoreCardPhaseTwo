import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./PartTwoRow.css";
export const PartTwoRow = ({ name, grade }) => {
  return (
    <Row className="border-dark">
      <Col className="col-9  border border-dark text-start padding fw-bolder text-capitalize">
        {name}
      </Col>
      <Col className="text-center border-start border-top border-dark col-3 padding fw-bolder text-capitalize border-bottom">
        {grade}
      </Col>
    </Row>
  );
};
