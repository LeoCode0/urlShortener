import React, { useState, useEffect } from "react";
import { ShortenItem } from "./ShortenItem";
import { Statistics } from "./Statistics";
import "../scss/shorten.scss";

export const Shorten = () => {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(document.querySelector("form"));
    const inputData = data.get("url");
    if (inputData.length === 0) {
      setError("Please add a link");
      return;
    }
    setError("");
    setLinks([...links, { url: inputData }]);
  };

  useEffect(() => {
    console.log(links);
  }, [links]);

  return (
    <div className="shorten-container">
      <div className="shorten">
        <form className="shorten__form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="url"
            className="shorten__input"
            placeholder="Shorten a link here..."
          />
          <p className="shorten__error">{error}</p>
          <button className="shorten__button" type="submit">
            Shorten It!
          </button>
        </form>
      </div>
      {links.map((link) => (
        <ShortenItem rawLink={link.url} />
      ))}
      <Statistics />
    </div>
  );
};
