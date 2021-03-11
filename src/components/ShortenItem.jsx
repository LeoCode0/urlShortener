import React, { useEffect, useState } from "react";

export const ShortenItem = ({ rawLink }) => {
  const API = "https://api.shrtco.de/v2";
  const [link, setLink] = useState();

  useEffect(() => {
    fetch(`${API}/shorten?url=${rawLink}`)
      .then((data) => data.json())
      .then((json) => setLink(json.result.full_short_link));
  }, []);

  const handleClick = () => {
    console.log("url copy", link);
  };
  return (
    <div className="shortenItem">
      <p className="shortenItem__raw">{rawLink}</p>
      <p className="shortenItem__short">{link}</p>
      <button className="shortenItem__button" onClick={handleClick}>
        Copy
      </button>
    </div>
  );
};
