import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import "../scss/footer.scss";

const BoostLinks = () => (
  <section className="boostLinks">
    <div className="boostLinks__container">
      <h2 className="boostLinks__title"> Boost your links today</h2>
      <button className="boostLinks__button">Get Started</button>
    </div>
  </section>
);

export const Footer = () => {
  return (
    <>
      <BoostLinks />
      <footer className="footer">
        <div className="container">
          <div className="footer__title-container">
            <h3 className="footer__title">Shortly</h3>
          </div>
          <ul className="footer__links">
            <li>
              <h3>Features</h3>
              <p>Link Shortening</p>
              <p>Branded Links</p>
              <p>Analytics</p>
            </li>
            <li>
              <h3>Resources</h3>
              <p>Blog</p>
              <p>Developers</p>
              <p>Support</p>
            </li>
            <li>
              <h3>About</h3>
              <p>Our Team</p>
              <p>Careers</p>
              <p>Contact</p>
            </li>
          </ul>
          <ul className="footer__socialMedia">
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaPinterest />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
