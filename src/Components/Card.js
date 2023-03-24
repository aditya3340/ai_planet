import React from "react";

const Card = ({ sub }) => {
  return (
    <div className="card-container">
      <div className="card-head">
        <img src={sub.coverImage} alt="coverImage" />
        <h4>{sub.title}</h4>
      </div>
      <p>{sub.description}</p>
    </div>
  );
};

export default Card;
