import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Collections from "./components/Collections";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Brands></Brands>
      <Collections></Collections>
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default App;
