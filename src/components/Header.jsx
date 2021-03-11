import { MdMenu } from "react-icons/md";
import icon from "../images/logo.svg";
import "../scss/header.scss";
import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={icon} alt="Logo" />
      <span className="header__menu">
        <MdMenu />
      </span>
    </header>
  );
};
