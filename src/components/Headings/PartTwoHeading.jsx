import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const PartTwoHeading = () => {
  return (
    <Row className="row">
      <Col
        className="text-center border border-1 border-dark col-9"
        style={{ padding: "37px" }}
      />
      <Col className="text-center d-flex border-1 border-start border-top border-bottom border-dark col-3 justify-content-center align-items-center fw-bold fs-5">
        Grade
      </Col>
    </Row>
  );
};
