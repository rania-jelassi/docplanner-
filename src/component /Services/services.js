import React from "react";
import "./services.css";

export default function Services() {
  return (
    <div>
      {this.props.arr.box.map(el => (
        <div className="el.Title ? For patients : For doctors"> </div>
      ))}
    </div>
  );
}
