import React, { useEffect, useState } from "react";
import "../scss/shortItem.scss";

export const ShortenItem = ({ rawLink }) => {
  const API = "https://api.shrtco.de/v2";
  const [link, setLink] = useState();

  useEffect(() => {
    fetch(`${API}/shorten?url=${rawLink}`)
      .then((data) => data.json())
      .then((json) => setLink(json.result.full_short_link));
  }, []);

  const handleClick = () => {
    let helper = document.createElement("input");
    helper.setAttribute("value", link);
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    document.body.removeChild(helper);
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
