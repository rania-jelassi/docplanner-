import React from "react";
import "./services.css";
import Card from "./Card";

const box = [
  {
    Title: "For patients",
    paragraph:"Find a doctor, book a visit and solve any health-related doubt",
    image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    button: [
      "CHOOSE COUNTRY",
      "ARGENTINA",
      "AUSTRALIA",
      "BRAZIL",
      "CHILE",
      "COLOMBIA",
      "CZECH",
      "FRANCE"
    ]
  },
  {
    Title: "For doctors",
    paragraph:"Save time managing visits and cut no-shows by half",
    image: "//www.docplanner.com/img/screen-saas@2x.png",   
    button: null
  }
];

export default function Services() {
  return (
    <div>
      < Card arr={box}/>
   </div> 
  );
}
