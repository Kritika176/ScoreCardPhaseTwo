import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ScoreCard.css";
export const ScoreCard = () => {
  return (
    <>
      <Container className="border border-dark fs-4">
        <Row className="border-bottom border-start border-end border-dark">
          <Col className="text-danger d-flex justify-content-center align-items-center fs-4 ">
            First Terminal Examination 2022-2023
          </Col>
        </Row>
        <Row className="border-bottom border-start border-end border-dark">
          <Col className="d-flex justify-content-center align-items-center fs-4 border-start border-end">
            ACADEMIC PERFORMANCE
          </Col>
        </Row>
        <Row className="border-end border-dark">
          <Col
            lg={7}
            xl={7}
            xxl={7}
            md={7}
            sm={7}
            className="d-flex justify-content-center align-items-center fs-4 border-start border-end border-dark primary text-primary font-weight-bold border-bottom border-dark"
          >
            Part - I : Scholastic Areas
          </Col>
          <Col
            lg={5}
            xl={5}
            xxl={5}
            md={5}
            sm={5}
            className="d-flex justify-content-center align-items-center fs-4 border-end border-dark text-primary font-weight-bold"
          >
            Part - II : Co-Scholastic Areas
          </Col>
        </Row>
        <Row className="border-end border-dark p-0">
          <Col
            lg={7}
            xl={7}
            xxl={7}
            md={7}
            sm={7}
            className="d-flex justify-content-center align-items-center fs-3 border-start border-end border-dark  font-weight-bold"
          >
            <Col
              lg={1}
              xl={1}
              xxl={1}
              md={1}
              sm={1}
              className="border-end border-dark text-wrap fs-6 fw-bold p-0"
            >
              <Row><Col className="font-weight-bold">Sr.</Col></Row>
              <Row><Col className="font-weight-bold">No.</Col></Row>
              
            </Col>
            <Col
              className="border-dark text-uppercase fs-6 fw-bold p-0"
              lg={5}
              xl={5}
              xxl={5}
              md={5}
              sm={5}
            >
             <Row >
              <Col className="border-end border-dark">Subjects</Col>
             </Row>
            </Col>
            <Col lg={6} xl={6} xxl={6} md={6} sm={6} className="p-0">
              3
            </Col>
          </Col>
          <Col
            lg={5}
            xl={5}
            xxl={5}
            md={5}
            sm={5}
            className="d-flex justify-content-center align-items-center fs-4 border-end border-dark text-primary font-weight-bold"
          >
            Part - II : Co-Scholastic Areas
          </Col>
        </Row>
      </Container>
    </>
  );
};
