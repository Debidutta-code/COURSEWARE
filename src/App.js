import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Body />
      <Cards/>
      <Footer/>
    </>
  );
};

export default App;
