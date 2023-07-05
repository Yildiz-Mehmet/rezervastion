import React from "react";

import Slideshow from "./Slideshow";
import Header from "../components/header/Header";
import "../components/header/Select.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
