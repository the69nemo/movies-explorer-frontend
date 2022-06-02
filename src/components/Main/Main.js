import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";

function Main() {
  return (
    <main className="main">
      <Header />
      <Promo />
      <NavTab />
    </main>
  );
}

export default Main;
