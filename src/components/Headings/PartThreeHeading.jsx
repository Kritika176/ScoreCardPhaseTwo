import Col from "react-bootstrap/Col";
export const PartThreeHeading = ({ type, name, score }) => {
  return (
    <>
      <Col
        className="border border-1 border-dark"
        xs={3}
        sm={3}
        md={2}
        lg={2}
      />
      <Col
        className="border border-1 border-dark p-0 fw-bolder fs-6"
        xs={3}
        sm={3}
        md={4}
        lg={4}
      >
        No of Working Days
      </Col>
      <Col
        className="border border-1 p-0 fw-bolder fs-6 border-dark"
        xs={3}
        sm={3}
        md={4}
        lg={4}
      >
        No of Days Present
      </Col>
      <Col
        className="border border-1 border-dark p-0 fw-bolder fs-6"
        xs={3}
        sm={3}
        md={2}
        lg={2}
      >
        Percentage
      </Col>
    </>
  );
};
