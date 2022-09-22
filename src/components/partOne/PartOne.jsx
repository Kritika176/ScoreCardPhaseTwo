import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { PartOneHeadings } from "../../components/Headings/PartOneHeading";
import { StudentRow } from "../studentRow/StudentRow";
import { getNewData } from "../../Redux/PartOne/action";
import { getPartOneData } from "../../Redux/PartOne/action";
import { Total } from "../Total/Total";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export const PartOne = ({ func,showFunc,showForm,bgStyle }) => {
  const [newData,setNewData]= useState([]);
  const partOneData = useSelector((state) => state.part_one.subjects);
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(getPartOneData([...newData,partOneData]))
  // },[partOneData]);
  useEffect(() => {setNewData(partOneData)},[partOneData])
  useEffect(() => {
    console.log("new",newData)
   dispatch(getNewData(newData));
  },[newData])
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    let totalScore = 0;
    newData.map((e) => (totalScore += e.oral_one + e.fa + e.sa + e.oral_two));
    setGrandTotal(totalScore);
  }, [newData]);
  
  return (
    <Col sm={{ span: 12 }} md={{ span: 7 }}>
      <Row className="border-dark">
        <Col className="text-center border-dark border-top border-bottom border-end text-primary fw-bolder fs-5 ">
          Part-I : Scholastic Areas
        </Col>
        
      </Row>
      <PartOneHeadings />
      {newData.map((e,i) => {
        return (
          <StudentRow
            key={i}
            sr={i}
            ind={i}
            oral1={e.oral_one}
            fa={e.fa}
            sa={e.sa}
            oral2={e.oral_two}
            sub={e.subject}
            elem={e}
            data = {partOneData}
            showFunc = {showFunc}
            showForm = {showForm}
            bgStyle = {bgStyle}
          />
        );
      })}
      <Total
        grandTotal={grandTotal}
        subjectNumber={partOneData.length }
        getPercentage={func}
      />
    </Col>
  );
};
