import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const Total = ({ grandTotal, subjectNumber, getPercentage }) => {
  const [percentage, setPercentage] = useState(null);
  useEffect(() => {
    setPercentage(((grandTotal / (100 * subjectNumber)) * 100).toFixed(1));
    
  }, [grandTotal, subjectNumber]);
  useEffect(() => {
    getPercentage(percentage);
  }, [getPercentage, percentage]);
  console.log(percentage)
  return (
    <>
      <Row >
        <Col className="col-1 border-bottom border-top border-dark"></Col>
        <Col className="col-3 border-end border-bottom border-top border-dark fw-bold text-uppercase text-nowrap ">
        {isNaN(grandTotal)?{grandTotal}:""}
        </Col>
        <Col className="col-6 border-start border-top border-dark">
          <Row className="text-center">
            <Col className="col-8 border-bottom  border-dark"></Col>
            <Col className="col-4 border-end  border-dark fw-bold">
            {Number.isNaN(grandTotal)?{grandTotal}:""}
            </Col>
            
          </Row>
          
        </Col>
        <Col className="col-2 border-bottom border-top border-dark border-end border-start"></Col>
      </Row>
      <Row>
        <Col className=" col-1 border-dark border-top border-bottom" />
        <Col className=" col-3 border-dark border-end border-top border-bottom fw-bold fs-6">
          PERCENTAGE
        </Col>
        <Col className="col-6">
          <Row className="text-center">
            <Col className="col-8  border-top border-bottom border-dark border-start"></Col>
            <Col className="col-4 border-end border-top border-bottom border-dark fw-bold"> {Number.isNaN(percentage)?{percentage}:""}</Col>
          </Row>
        </Col>
        <Col className="col-2 border-bottom border-top border-dark border-end border-start"></Col>
      </Row>
      <Row className="border-bottom border-dark ">
        <Col
          className=" border-top border-dark col-1"
          lg={1}
          md={1}
          xs={1}
          sm={1}
        />
        <Col className="col-3 border-end  border-top border-dark fw-bold fs-6">
          RANK
        </Col>
        <Col className="col-6 border-start border-end border-top border-dark">
          <Row className="text-center">
            <Col className="col-8 border-dark"></Col>
            <Col className="col-4 fw-bold">V</Col>
            
          </Row>
        </Col>
        <Col className="col-2 border-top border-dark border-end border-start"></Col>
      </Row>
    </>
  );
};
