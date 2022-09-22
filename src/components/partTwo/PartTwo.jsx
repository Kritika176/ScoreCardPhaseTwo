import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { PartTwoHeading } from "../Headings/PartTwoHeading";
import { PartTwoRow } from ".././PartTwoRow/PartTwoRow";
import { useSelector } from "react-redux";
export const PartTwo = () => {
  const partTwoData = useSelector((state) => state.part_two.subjects);
  return (
    <Col sm={{ span: 12 }} md={{ span: 5 }} lg={{ span: 5 }}>
      <Row className="border-top border-start border-bottom border-dark">
        <Col className="text-center text-primary fw-bolder fs-5">
          Part-II : Co-Scholastic Areas
        </Col>
      </Row>
      <PartTwoHeading />
      {partTwoData.map((e, i) => (
        <PartTwoRow name={e.subject} grade={e.grade} key={i} />
      ))}
    </Col>
  );
};
