import React from "react";
import "./card.css";

const Card = ({ phrases }) => {
  return (
    <section className="section__container">
      <div>
        <p className="phrase">{phrases.quote}</p>
        <p className="author">Author: {phrases.author} </p>
      </div>
    </section>
  );
};

export default Card;
