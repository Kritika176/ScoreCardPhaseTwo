import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PartThreeHeading } from ".././Headings/PartThreeHeading";
import { PartThreeRow } from "../PartThreeRow/PartThreeRow";
import { useSelector } from "react-redux";
import data from "../.././data.json";
export const PartThree = () => {
  const partThreeData = useSelector((state) => state.part_three);
  console.log(partThreeData);
  const workingDays = partThreeData.wd;
  const daysPresent = partThreeData.dp;
  // const daysPresent = data.part_three.days_present;
  // const type = data.part_three.type;
  // const name = data.part_three.name;
// console.log(workingDays,daysPresent)
  return (
    <>
      <Row>
        <Col className="text-center p-2 fw-bolder fs-5 ">{`Part III : Attendance`}</Col>
      </Row>
      <Row className="px-3 text-center">
        <PartThreeHeading />
        <PartThreeRow
          workingDays={workingDays}
          daysPresent={daysPresent}
          type={"Term-I"}
        />
      </Row>
    </>
  );
};
