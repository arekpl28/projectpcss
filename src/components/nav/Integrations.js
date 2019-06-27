import React from "react";
import { Link } from "react-router-dom";

const Integrations = () => {
  return (
    <>
      <li>
        <Link to="#" className="active_service integrations">
          <p>PCSS Fellesregister</p>
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service integrations">
          Fakturaimport Visma.net
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service integrations">
          Consignor Fraktoppdatering
        </Link>
      </li>
      <li>
        <Link to="#" className="active_service integrations">
          Consignor Prisoppslag
        </Link>
      </li>
    </>
  );
};

export default Integrations;
