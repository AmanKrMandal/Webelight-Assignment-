import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const Nav = () => {


  return (
    <div className="main-nav">
      <div className="main-box">
        <Link className="resp link" to="/">
          Repository
        </Link>
      </div>
    </div>
  );
};

export default Nav;
