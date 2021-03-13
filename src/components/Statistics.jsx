import React from "react";
import customizable from "../images/icon-fully-customizable.svg";
import recognition from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import "../scss/statistics.scss";

const Statistic = ({ name, icon, title, text }) => (
  <li className={`statistic ${name}`}>
    <div className="statistic__icon-container">
      <img src={icon} alt={title} />
    </div>
    <h2 className="statistic__title title">{title}</h2>
    <p className="statistic__description description ">{text}</p>
  </li>
);

export const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics__info">
        <div className="statistics__title title">Advanced Statistics</div>
        <div className="statistics__description description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </div>
      </div>
      <ul className="statistics__list">
        <Statistic
          icon={recognition}
          name="recognition"
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don’t
                  mean a thing. Branded links help instil confidence in your content."
        />
        <li className="separator"></li>
        <Statistic
          icon={records}
          name="records"
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions."
        />
        <li className="separator"></li>
        <Statistic
          icon={customizable}
          name="customizable"
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable
                  links, supercharging audience engagement."
        />
      </ul>
    </div>
  );
};
