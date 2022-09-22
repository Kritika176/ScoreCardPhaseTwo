import React, { useRef } from "react";
import "./App.css";
import Main from "./Main/Main.jsx";
import { useReactToPrint } from "react-to-print";
import html2pdf from "html2pdf.js"
import {ScoreCard} from "../src/components/ScoreCard/ScoreCard";
function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const generatePDF = () => {
    const source = document.getElementById("mainCon");
    const fileName = "kritika.pdf";
    var opt = {
      margin: 0.2,
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 8 },
      jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(source).save();
  };
  return (
    <>
    <div>
       <ScoreCard/>
    </div>
    </>
  );
}
export default App;
