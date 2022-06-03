import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";

function Main() {
  return (
    <main className="main">
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
    </main>
  );
}

export default Main;
