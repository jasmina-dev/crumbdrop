import React from "react";
import "./Card.css";
import { fetchData, updateData } from "./api/api";
import { useEffect } from "react";

const Card = (props) => {
  const [claimed, setClaimed] = React.useState(props.claimed);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setClaimed(result[props.id].claimed);
    };

    getData();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    setClaimed(1);
    const data = {
      claimed: 1,
      id: props.id,
      school: props.school,
    };
    try {
      await updateData(data);
    } catch (error) {}
  };

  return (
    <div className="card">
      <img src={props.imageurl} alt={props.title} className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-school">📍 {props.school}</p>
        <p className="card-location">{props.location}</p>
        <p className="card-description">{props.description}</p>
      </div>
      <button
        className={claimed === 1 ? "hidden-btn" : "active-btn"}
        onClick={handleClick}
      >
        {claimed === 1 ? "claimed" : "claim"}
      </button>
    </div>
  );
};

export default Card;
