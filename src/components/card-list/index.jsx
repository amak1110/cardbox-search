import React from "react";
import "./style.css";
import { Card } from "../card";
export const CardList = (probs) => (
  <div className="card-list">
    {probs.robots.map((el) => (
      <Card key={el.id} robot={el} />
    ))}
  </div>
);
