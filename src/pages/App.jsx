import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Shorten } from "../components/Shorten";
import "../scss/styles.scss";
import React from "react";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Shorten />
    </>
  );
};

export default App;
