import React from "react";
import "./Card.css";

const Card = (props) => {
  const [claimed, setClaimed] = React.useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await insertData(formData);
      setClaimed(true);
    } catch (error) {}
  };

  return (
    <div className="card">
      <img src={""} alt={props.title} className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-school">📍 {props.school}</p>
        <p className="card-location">{props.location}</p>
        <p className="card-description">{props.description}</p>
      </div>
      <button id="claim-btn">claim</button>
    </div>
  );
};

export default Card;
