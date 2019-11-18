import React from "react";
import "./LocalCulture.css";

export default function local(props) {
  return (
    <div className="local-culture">
      <h2 className="title-local-culture">
        {" "}
        We are a global company <br /> with local culture{" "}
      </h2>
      {props.arr.map((el, key) => (
        <span key={key} className="logo">
          {el}
        </span>
      ))}
      ;
    </div>
  );
}
