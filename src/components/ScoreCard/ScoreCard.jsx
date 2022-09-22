import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { forwardRef, useState } from "react";
import { PartOne } from "../partOne/PartOne";
import { PartTwo } from "../partTwo/PartTwo";
import { PartThree } from "../partThree/PartThree";
import "./ScoreCard.css";
import { GradingScale } from "../GradingScale/GradingScale";
import { EditForm } from "./../Form/EditForm/EditForm";

export const ScoreCard = forwardRef((opacityStyle, showFunc, componentRef) => {
  const [getPercentage, setPercentage] = useState(0);
  const [showOne, setShowOne] = useState(false);
  return (
    <div ref={componentRef}>
      {showOne ? (
        <>
          <div className="formOne">
            <EditForm />
          </div>
        </>
      ) : null}
      <Container
        className="border border-dark border-3 mainBox"
        id="print"
        style={{
          opacity: `${opacityStyle}`,
        }}
      >
        <Row>
          <Col className="text-center border-bottom text-danger fs-3 fw-bolder border-1 border-dark">
            First Terminal Examination 2021-2022
          </Col>
        </Row>
        <Row>
          <Col className="text-center border-1 border-top border-bottom  fs-4 text-uppercase fw-bold border-dark">
            Academic Performance
          </Col>
        </Row>
        <Row className="border-1 border-dark">
          <PartOne
            func={setPercentage}
            showFunc={showFunc}
            showForm={setShowOne}
            bgStyle={opacityStyle}
          />
          <PartTwo />
        </Row>
        <PartThree />
        <Row className="px-1">
          <Col>
            <span className="fw-bolder fs-5">C.G.P. : </span>{" "}
            <span className="fw-bold fs-6">
              {(getPercentage / 9.5).toFixed(1)}
            </span>
          </Col>
          <Col className="text-end">
            <span className="fw-bolder fs-5">Grade</span>
            <span className="fw-bold fs-6"> : A1</span>
          </Col>
        </Row>
        <Row className="px-1">
          <Col>
            <span>Teacher's Remarks-</span>
            <span className="fw-bold fs-6">Excellent</span>
          </Col>
        </Row>
        <Row className="px-1 pt-5">
          <Col className="fw-bold italicFont fs-4">Teacher's Signature</Col>
          <Col className="text-center italicFont fw-bold fs-4">
            Parent's Signature
          </Col>
          <Col className="text-end italicFont fw-bold fs-4">
            Principal's Signature
          </Col>
        </Row>
        <Row>
          <Col className="text-center border-1">
            <span className="fw-bolder fs-2">G</span>
            <span className="fw-bold">RADING</span>
            <span className="fw-bolder fs-2"> S</span>
            <span className="fw-bold">CALE</span>
          </Col>
        </Row>
        <Row>
          <Col xs={1} sm={1} md={3} lg={3} />
          <Col className="border-1" xs={10} sm={10} md={6} lg={6}>
            <GradingScale />
          </Col>
          <Col xs={1} sm={1} md={3} lg={3} />
        </Row>
        <Row>
          <Col className="border-top border-dark" xs={1} sm={1} md={3} lg={3} />
          <Col
            className="col- d-flex 
         justify-content-center align-items-center fw-bold fs-3 border-top border-dark italicFont text-nowrap"
            xs={10}
            sm={10}
            md={6}
            lg={6}
          >
            Our Parent are seen God on the Earth
          </Col>
          <Col
            className="border-top border-dark "
            xs={1}
            sm={1}
            md={3}
            lg={3}
          />
        </Row>
      </Container>
    </div>
  );
});
