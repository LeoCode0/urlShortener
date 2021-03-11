import React from "react";
import recognition from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";

const Statistic = ({ icon, title, text }) => (
  <li className="statistic">
    <img src={icon} alt={title} className="statistic__icon" />
    <h2 className="statistic__title">{title}</h2>
    <p className="statistic__description">{text}</p>
  </li>
);

export const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics__info">
        <div className="statistics__title">Advanced Statistics</div>
        <div className="statistics__description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </div>
      </div>
      <ul className="statistics__list">
        <Statistic
          icon={recognition}
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don’t
                  mean a thing. Branded links help instil confidence in your content."
        />
        <Statistic
          icon={records}
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where
                  people engage with your content helps inform better decisions."
        />
        <Statistic
          icon={customizable}
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable
                  links, supercharging audience engagement."
        />
      </ul>
    </div>
  );
};
