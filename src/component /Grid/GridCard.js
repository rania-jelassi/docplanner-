import React from "react";

function GridCard(props) {
  return (
    <div>
      {props.arr.map((el, key) => (
        <div key={key} className="gridBox">
          <img className="imageGrid" src={el.image.src} />
          <h2 className="titleGrid">{el.title}</h2>
          <p className="paragraphGrid"> {el.para}</p>
        </div>
      ))}
    </div>
  );
}

export default GridCard;
