import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const AboutUs = () => {
  return <div className="version">
      <p>App Version 1.0.0</p>
      <Link to="/">Back</Link>
  </div>
};

export default AboutUs;
