import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "component/Nav/Nav";
import Health from "component/HeathcareExperience/Health";
import Services from "component/Services/services";
import Footer from "component/Footer/footer";

const Tab = [
  { menu: "About us" },
  { menu: "Career" },
  {
    menu: "Departments",
    subMenu: [
      { name: "Marketing & PR", path: "/" },
      { name: "Customer Success & Sales", path: "/" },
      { name: "IT, Product, Design & UX", path: "/" },
      { name: "Finance & Administration", path: "/" },
      { name: "HR & more", path: "/" }
    ]
  }
];
const box = [
  {
    Title: "For patients",
    paragraph: "Find a doctor, book a visit and solve any health-related doubt",
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
    paragraph: "Save time managing visits and cut no-shows by half",
    image: "//www.docplanner.com/img/screen-saas@2x.png",
    button: null
  }
];

function App() {
  return (
    <div className="App">
      <Nav arr={Tab} />
      <Health />
      <Services arr={box} />
      <Footer />
    </div>
  );
}
export default App;
