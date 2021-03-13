import { MdMenu } from "react-icons/md";
import icon from "../images/logo.svg";
import "../scss/header.scss";
import React from "react";
import { NavbarDesktop } from "./Navbar";

export const Header = ({ value, set }) => {
  const handleClick = () => {
    if (value === "hide") {
      set("show");
    } else {
      set("hide");
    }
  };
  return (
    <header className="header">
      <img className="header__logo" src={icon} alt="Logo" />
      <NavbarDesktop />
      <span className="header__menu" onClick={handleClick}>
        <MdMenu />
      </span>
    </header>
  );
};
