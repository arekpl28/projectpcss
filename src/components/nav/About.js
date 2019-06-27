import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <li>
        <Link to="#" className="active_service">
          <p>PCSS</p>
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service">
          Hvem er vi?
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service">
          Lillehammer
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service">
          Oslo
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service">
          Bergen
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service">
          Otta
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service">
          Kongsvinger
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service">
          Våre betingelser
        </Link>
      </li>
    </>
  );
};

export default About;
