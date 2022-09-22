import { ScoreCard } from "../components/ScoreCard/ScoreCard";
import React, { forwardRef } from "react";
import { FormContainer } from "../components/Form/FormContainer/FormContainer";
import { useState } from "react";
const Main = forwardRef((props, ref) => {
  const [formContainerStyle, setFormContainerStyle] = useState({
    height: "16%",
    display: "none",
  });

  const [scoreCardStyle, setScoreCardStyle] = useState(5);

  const setStyle = () => {
    setScoreCardStyle(0.1);
    setFormContainerStyle({
      height: "16%",
      display: "block",
    });
  };

  return (
    <div id="mainCon" ref={ref} style={{ position: "relative" }}>
      <div className="buttonStyle">
        <button
          type="button"
          className="btn btn-primary"
          onClick={setStyle}
          style={{ opacity: `${scoreCardStyle}` }}
        >
          Create ScoreCard
        </button>
      </div>
      <FormContainer
        getStyle={setScoreCardStyle}
        formContainerStyle={formContainerStyle}
        formFunction={setFormContainerStyle}
        x
      />
      <div>
        <ScoreCard opacityStyle={scoreCardStyle} />
      </div>
      <div>
        <i class="fa fa-download" style={{ fontSize: "36px" }}></i>
      </div>
      {/* <div className="d-flex align-items-center justify-content-center"><button type="button" class="btn btn-primary">Download</button></div> */}
    </div>
  );
});

export default Main;
