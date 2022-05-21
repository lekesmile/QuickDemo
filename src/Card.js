import React from "react";

const Card = (props) => {
  return (
    <div className="cardDiv">
      <p className="id">{props.id}</p>
      <p className="title">{props.title}</p>
      <p className="bodyTest">{props.body}</p>
    </div>
  );
};

export default Card;
