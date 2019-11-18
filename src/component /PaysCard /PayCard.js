import React from "react";

function PayCard(props) {
  return (
    <div className="pictures">
      {props.arr.map((el, key) => (
        <div key={key}>
          <img src={el.image.src} className="photo" />
          <div className="alignement-pictures">
            <h1 className="titre-pay">{el.titre} </h1>
            <button className="button">{el.boutton} </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default PayCard;
