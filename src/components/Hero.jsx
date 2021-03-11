import React from "react";
import image from "../images/illustration-working.svg";
import "../scss/hero.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image-container">
        <img src={image} alt="Working" />
      </div>
      <div className="hero__text-container">
        <h2 className="hero__title">More than just shorter links</h2>
        <p className="hero__description">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="hero__button">Get Started</button>
      </div>
    </section>
  );
};
