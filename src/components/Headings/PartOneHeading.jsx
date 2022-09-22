import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../App.css";
export const PartOneHeadings = () => {
  return (
    <>
      <Row>
        <Col className="text-center col-1 border-top border-bottom border-end border-dark p-0">
          <Col className="col-12 fw-bold ">Sl.</Col>
          <Col className="col-12 fw-bold">NO.</Col>
        </Col>
        <Col className="col-3 d-flex border border-dark justify-content-center align-items-center fw-bold fs-6">
          SUBJECTS
        </Col>
        <Col className="text-center col-6 ">
          <Row>
            <Col className="border border-dark col-2 fs-6 fw-bold">FA</Col>
            <Col className="border border-dark col-2 p-0 fw-bold">Oral</Col>
            <Col className="border border-dark col-2 fw-bold">SA</Col>
            <Col className="border border-dark col-2 p-0 fw-bold">Oral</Col>
            <Col className="border border-dark col-4 fw-bold">Total Marks</Col>
          </Row>
          <Row>
            <Col className="border border-dark col-2 fw-bold">40</Col>
            <Col className="border border-dark col-2 fw-bold">10</Col>
            <Col className="border border-dark col-2 fw-bold">40</Col>
            <Col className="border border-dark col-2 fw-bold">10</Col>
            <Col className="border border-dark col-4 fw-bold">100</Col>
          </Row>
        </Col>
        <Col
          
          id="print_hide"
          className="col-2 d-flex border border-dark justify-content-center align-items-center fw-bold fs-6"
        >
          EDIT/DELETE
        </Col>
      </Row>
    </>
  );
};
