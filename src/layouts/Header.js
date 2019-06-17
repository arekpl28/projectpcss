import React from "react";

import visma from "../image/visma.png";
import pcss from "../image/pcss.png";

const Header = () => {
  return (
    <>
      <div className="trueHeader">
        <div className="container">
          <div className="visma">
            <img src={visma} alt="visma logo" />
          </div>
          <div className="pcss">
            <img src={pcss} alt="" />
          </div>
          <div className="navbar-toggle">
            <p className="menu">menu</p>
            <i className="fas fa-bars" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
