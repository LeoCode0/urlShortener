import React from "react";
import "../scss/navbar.scss";

export const NavbarDesktop = () => (
  <nav className="navbarDesktop">
    <ul className="navbar__list">
      <li>Features</li>
      <li>Pricing</li>
      <li>Resources</li>
    </ul>
    <div className="navbar__user">
      <p className="navbar__login">Login</p>
      <button className="navbar__button">Sign Up</button>
    </div>
  </nav>
);

export const NavbarMobile = ({ state }) => (
  <nav className={`navbarMobile ${state}`}>
    <ul className="navbar__list">
      <li>Features</li>
      <li>Pricing</li>
      <li>Resources</li>
    </ul>
    <div className="navbar__user">
      <p className="navbar__login">Login</p>
      <button className="navbar__button">Sign Up</button>
    </div>
  </nav>
);
