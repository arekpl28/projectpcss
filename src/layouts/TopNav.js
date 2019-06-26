import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="top_nav">
      <ul className="container">
        <li>
          <a href="mailto:firmapost@pcss.no">
            <i className="far fa-envelope" />
            <p>firmapost@pcss.no</p>
          </a>
        </li>
        <li>
          <Link to="#">
            <i className="fas fa-phone" />
            <p>+47 400 69 400</p>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fas fa-medkit" />
            <p>TeamViewer</p>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fas fa-question" />
            <p>Kundesenter</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
