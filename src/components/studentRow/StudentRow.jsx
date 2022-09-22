import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

import "./StudentRow.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPartOneData } from "../../Redux/PartOne/action";
import { editFormOne } from "../../Redux/PartOne/action";
import { getIndex } from "../../Redux/PartOne/action";
export const StudentRow = ({
  sr,
  sub,
  ind,
  fa,
  oral1,
  sa,
  oral2,
  elem,
  data,
  showFunc,
  showForm,
  bgStyle,
}) => {
  console.log("in", ind);
  const dispatch = useDispatch();

  const edit = () => {
    showForm(true);
    bgStyle(0.1);
    dispatch(getIndex(ind));
  };
  const partSub = useSelector((state) => state.part_one.subjects);

  
  const del = () => {
  
    // const filteredValue =  partOneData.filter((e) => e.sub !== sub);
    //  dispatch(getPartOneData(filteredValue));
    //  console.log("first",partSub)
    if(partSub.length===1)
    {
      dispatch(getPartOneData([]));
    } else{
    // console.log(sauData, "sau");
    let sauData = [...partSub].splice(ind, 1);
     dispatch(getPartOneData([...sauData]));
    }
    //  console.log("last",partSub,ind);
  };

  useEffect(() => {
    dispatch(
      editFormOne({
        sub,
        fa,
        oral1,
        sa,
        oral2,
      })
    );
  }, [fa, oral1, sa, oral2, dispatch, sub]);

  return (
    <>
      <Row className="rowPadding">
        <Col className="text-center col-1 border-top border-bottom border-end border-dark ">
          <Row className="fw-bold">
            {sr < 9 ? <Col>{`0${sr + 1}`}</Col> : <Col>{sr + 1}</Col>}
          </Row>
          <Row></Row>
        </Col>
        <Col className=" col-3 border border-dark fw-bold rowPadding text-uppercase">
          {sub}
        </Col>
        <Col className="text-center  col-6 fw-bold">
          <Row className="text-center">
            <Col className="border border-dark col-2 fs-6 text-uppercase">
              {fa}
            </Col>
            <Col className="border border-dark col-2 fs-6 text-uppercase">
              {oral1}
            </Col>
            <Col className="border border-dark col-2 fs-6 text-uppercase">
              {sa}
            </Col>
            <Col className="border border-dark col-2 fs-6 text-capitalize">
              {oral2}
            </Col>

            {sub === "Drawing" ? (
              <Col className="border border-dark col-4 p-0 fs-6 text-uppercase">
                {elem.grade}
              </Col>
            ) : (
              <Col className="border border-dark col-4 p-0 fs-6 text-uppercase">
                <Row className="row">
                  <Col className="d-flex justify-content-end col-7 p-0">
                    {" "}
                    {fa + sa + oral1 + oral2}
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </Col>
        <Col className="text-center col-2 border-top border-bottom border-end border-1 p-0 border-dark ">
          <Row >
            <Col className="col-6 ">
              <i
                class="material-icons"
                style={{ "font-size": "17px", cursor: "pointer" }}
                onClick={edit}
              >
                border_color
              </i>
            </Col>
            <Col className="col-6 ">
              <i
                className="material-icons"
                style={{ "font-size": "17px", cursor: "pointer" }}
                onClick={() => del()}
              >
                delete
              </i>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
