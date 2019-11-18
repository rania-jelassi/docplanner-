import React from "react";
import GridCard from "./GridCard.js";
import "./Grid.css";

const TabGrid = [
  {
    image: { src: "https://www.docplanner.com/img/flag.png" },
    title: "Leader in 10 countries",
    para:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
  },
  {
    image: { src: "https://www.docplanner.com/img/patients.png" },
    title: "30 million unique patients",
    para: "visit us every month"
  },
  {
    image: { src: "https://www.docplanner.com/img/visits.png" },
    title: "1.5 million appointments",
    para: "booked last month"
  },
  {
    image: { src: "https://www.docplanner.com/img/doctors.png" },
    title: "2 million active doctors",
    para: "trust in our solutions"
  }
];

function Grid() {
  return (
    <div className="headerGrid">
      <div className="grid">
        <h1 className="grid-title-h1">
          The world's <br /> biggest healthcare platform{" "}
        </h1>
        <h3 className="grid-title-h3">
          We work from 6 offices all over the world, bringing Docplanner <br />{" "}
          Group to life in almost 20 countries.
        </h3>
        <img
          className="photoGrid"
          src="https://www.docplanner.com/img/logo.png"
        />
      </div>

      <div className="ajustement">
        <GridCard className="box1" arr={TabGrid.slice(0, 2)} />
        <GridCard className="box2" arr={TabGrid.slice(2)} />
      </div>
    </div>
  );
}
export default Grid;
