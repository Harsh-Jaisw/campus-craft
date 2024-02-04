// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

import ContactUs from "./Pages/ContactUs/ContactUs";
import Courses from "./Pages/Courses/Courses";
import AboutUs from "./Pages/Aboutus/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}
