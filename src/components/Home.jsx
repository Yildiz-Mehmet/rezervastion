import React from "react";

import Slideshow from "./Slideshow";
import Header from "../components/header/Header";
import "../components/header/Select.css";

const Home = () => {
  return (
    <div>
      <Slideshow />
      <Header />
    </div>
  );
};

export default Home;
