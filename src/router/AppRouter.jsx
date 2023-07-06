import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Agents from "../components/navbar/Agents";
import Pricing from "../components/navbar/Pricing";
import Partners from "../components/navbar/Partners";
import AboutUs from "../components/navbar/AboutUs";
import Blog from "../components/navbar/Blog";
import Faq from "../components/navbar/Faq";
import Support from "../components/navbar/Support";
import ContactUs from "../components/navbar/ContactUs";
import Buy from "../components/navbar/Buy";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/navbar/Profile";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="agents" element={<Agents />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="partners" element={<Partners />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<Faq />} />
        <Route path="support" element={<Support />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="buy" element={<Buy />} />
        <Route path="profile" element={<Profile />} />

        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
