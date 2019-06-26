import React from "react";
import { Link } from "react-router-dom";

import ProPartner from "../../image/ProPartner.png";
import webinar from "../../image/webinar.png";

const Left = () => {
  return (
    <>
      <div className="vc_cta3-container">
        <div className="vc_general">
          <div className="pro_partner">
            <Link to="#">
              <img src={ProPartner} alt="" />
            </Link>
          </div>
          <p className="text-1">PCSS er en Veeam ProPartner!</p>
          <p className="text-2">
            Vi leverer backupsikkerhet for din bedrift fra en av verdens ledende
            innen Cloud Data Management.
          </p>
          <button className="pro_partner">
            Ta kontakt med oss for et prat om backup!
          </button>
        </div>
        <div className="vc_general nettbasert">
          <h2>10 grunner til å velge nettbasert ERP!</h2>
          <p className="text-1">
            Visma har laget en gratis guide for deg som vurderer nettbasert ERP.
            Denne er verdt å ta en titt på!
          </p>
          <p className="text-2">
            Ta <a href="/">kontakt</a> med oss i PCSS for å se hvordan{" "}
            <a href="/"> Visma.net </a> kan skape vekst og redusere kostnader
            for din bedrift!
          </p>
          <div className="last_ned">
            <i className="far fa-file-alt" />
            <p>Last ned guiden her!</p>
          </div>
        </div>
        <div className="vc_general webinar">
          <h2>Webinar</h2>
          <div className="webinar_image">
            <img src={webinar} alt="" />
          </div>
        </div>
        <div className="vc_general container">
          <p className="text-1">
            Vi har oppdatert oversikten over webinarer du kan delta på, både fra{" "}
            <a href="/"> Visma</a> og <a href="/">SuperOffice</a>.
          </p>
          <p className="text-2">
            Webinarer er glimrende for deg som har travle dager, men ønsker litt
            faglig oppdatering innimellom. Et webinar kan nytes foran egen PC
            med en kaffekopp.
          </p>
          <p className="text-3">
            Et typisk webinar varer omtrent 30 min, og konsentrerer seg gjerne
            om et emne om gangen.
          </p>
          <p className="text-4">
            Ta en titt på vår oversikt over <a href="/">webinarer fra Visma</a>{" "}
            eller <a href="/">webinarer fra SuperOffice</a>, og se om det er noe
            du ønsker å lære mer om.
          </p>
        </div>
      </div>
    </>
  );
};

export default Left;
