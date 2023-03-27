import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ sub }) => {
  const navigate = useNavigate()

  
  return (
    <div className="card-container" onClick = {() => navigate(`submissions/${sub.id}`)}>
      <div className="card-head">
        <img src={sub.coverImage} alt="coverImage" />
        <h4>{sub.title}</h4>
      </div>
      <p>{sub.summary}</p>
    </div>
  );
};

export default Card;
