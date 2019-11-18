import React from "react";
import "./PaysCard.css";
import PayCard from "./PayCard";

const Tabpays = [
  {
    image: { src: "https://www.docplanner.com/images/warsaw.png" },
    titre: "Warsaw",
    boutton: "SEE OPENING"
  },
  {
    image: { src: "https://www.docplanner.com/images/barcelona.png" },
    titre: "Bacelona",
    boutton: "SEE OPENING"
  },
  {
    image: { src: "https://www.docplanner.com/images/istanbul.png" },
    titre: "Istanbul",
    boutton: "SEE OPENING"
  },
  {
    image: { src: "https://www.docplanner.com/images/rome.png" },
    titre: "Rome",
    boutton: "SEE OPENING"
  },
  {
    image: { src: "https://www.docplanner.com/images/mexico-city.png" },
    titre: "Mexico City",
    boutton: "SEE OPENING"
  },
  {
    image: { src: "https://www.docplanner.com/images/curitiba.png" },
    titre: "Curitiba",
    boutton: "SEE OPENING"
  }
];
export default function pay() {
  return (
    <div>
      <PayCard arr={Tabpays} />;
    </div>
  );
}
