import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={""} alt={props.title} className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-school">📍 {props.school}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
