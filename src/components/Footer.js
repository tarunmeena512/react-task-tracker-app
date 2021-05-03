import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const Footer = () => {
  return <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
  </footer>
};

export default Footer;
