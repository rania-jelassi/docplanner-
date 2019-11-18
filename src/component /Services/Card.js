import React from "react";
import "./services.css";

export default function card(props) {
  return (
    <div className="services">
      {props.arr.map((el, i) => (
        <div
          key={i}
          className={
            el.Title === "For patients" ? "For-patients" : "For-doctors"
          }
        >
          <h1 className="titre">{el.Title}</h1>
          <p className="paragraph">{el.paragraph}</p>
          <div className="alignement">
            <img className="image-box" src={el.image} alt="...." />

            {el.button && (
              <select>
                {el.button.map((el, key) => (
                  <option key={key} className="button-box">
                    {" "}
                    {el}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
