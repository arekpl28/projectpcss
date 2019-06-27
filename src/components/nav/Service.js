import React from "react";
import { Link } from "react-router-dom";

import Integrations from "../nav/Integrations";

const Service = props => {
  return (
    <>
      <li>
        <Link
          to="#"
          className={
            props.integrations_active
              ? "active_service arrow menu-item active"
              : "active_service arrow menu-item"
          }
          onClick={props.click}
        >
          <p>Integrasjoner</p>
          <i
            className={
              props.integrations_active
                ? "fas fa-chevron-right icon"
                : "fas fa-chevron-right"
            }
          />
        </Link>
      </li>
      {props.integrations_active ? <Integrations /> : null}
      <li>
        <Link to="#" className="active_service">
          Vi tilbry...
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service">
          PCSS Surface
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service">
          Lønnskjøring
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service">
          Webinar Visam
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service">
          Webinar Superoffice
        </Link>
      </li>
    </>
  );
  // }
};

export default Service;
