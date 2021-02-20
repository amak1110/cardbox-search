import React from "react";
import "./style.css";

export const Card = (probs) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${probs.robot.id}?set=set2&size=150x150`}
      alt=""
    />

    <h2>{probs.robot.name}</h2>
    <p>{probs.robot.email}</p>
    <p>{probs.robot.phone}</p>
  </div>
);
