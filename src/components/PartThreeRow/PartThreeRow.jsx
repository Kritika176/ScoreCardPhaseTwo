import Col from "react-bootstrap/Col";
export const PartThreeRow = ({workingDays,daysPresent,type }) => {
  return (
    <>
    <Col className="border border-1 fw-bolder fs-6 border-dark text-uppercase" xs={3} sm={3} md={2} lg={2} >{type}</Col>
    <Col className="border border-1 border-dark p-0 fw-bold" xs={3} sm={3} md={4} lg={4}>
        {workingDays}
      </Col>
      <Col className="border border-1 border-dark p-0 fw-bold" xs={3} sm={3} md={4} lg={4}>
        {daysPresent}
      </Col>
      <Col className="border border-1 border-dark fw-bold" xs={3} sm={3} md={2} lg={2}>
       {((daysPresent/workingDays)*100).toFixed(2)}
      </Col>
      </>
  )
   
};
