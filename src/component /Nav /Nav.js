import React from "react";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div className="main-header">
      <img
        className="logo-docplanner"
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="Docplanner Group"
      ></img>
      <ul className="navmenu">
        {props.arr.map((el, key) => (
          <li className={el.subMenu ? "withdrop" : ""} key={key}>
            {el.menu}{" "}
            {el.subMenu && (
              <ul className="dropdown">
                {" "}
                {el.subMenu.map((x, key) => (
                  <li key={key}>
                    <a href={x.path}>{x.name}</a>
                  </li>
                ))}{" "}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
