import "./TopDashboard.css";
import React from "react";
import Reload from "./images/Reload.png";

function Card(props) {
  const classes = "cards " + props.className;
  return (
    <div className={classes}>
      <span className="number">{props.number}</span>
      <div className="style">
        <img src={props.image} alt="reading" />
      </div>
      <div className="total">{props.total}</div>
      <div className="last-update">
        <img src={Reload} alt={props.alt} />
        Last Update
      </div>
    </div>
  );
}

export default Card;
