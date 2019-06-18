import React from "react";

import autoinvoice from "../../image/autoinvoice.png";

const Right = () => {
  return (
    <>
      <div className="wpb_column">
        <div className="post">
          <div className="autoinvoice_img">
            <img src={autoinvoice} alt="autoinvoice" />
          </div>
          <h2>Effektiviser faktureringen med Efaktura</h2>
          <p className="text">
            Visma.net har en innebygget faktureringsmotor, Visma.net
            AutoInvoice, som håndterer alle bedriftens inn- og utgående
            fakturaer. Denne løsningen gir deg full kontroll på
            faktureringsprosessen og sørger for at arbeidsflyten er strømlinjet.
            I denne motoren kan du sende, motta og konvertere elektroniske
            fakturaer og kreditnotaer i internasjonale og nasjonale formater.
            Løsningen støtter følgende formater for sending og mottakelse: […]
          </p>
        </div>
      </div>
    </>
  );
};

export default Right;
