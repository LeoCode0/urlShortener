import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Shorten } from "../components/Shorten";
import { Footer } from "../components/Footer";
import "../scss/styles.scss";
import React, { useState } from "react";
import { NavbarMobile } from "../components/Navbar";

const App = () => {
  const [navbar, setNavbar] = useState("hide");
  return (
    <>
      <Header value={navbar} set={setNavbar} />
      <NavbarMobile state={navbar} />
      <Hero />
      <Shorten />
      <Footer />
    </>
  );
};

export default App;
