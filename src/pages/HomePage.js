import React from "react";

import webbanner from "../image/webbanner.jpg";
import Left from "../components/HomePage/Left";
import Right from "../components/HomePage/Right";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="content_fullwidth">
          <div className="wpb_wrapper effect">
            <img src={webbanner} alt="webbanner" />
          </div>
          <div className="vc_row-container">
            <div className="left">{<Left />}</div>
            <div className="right">{<Right />}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
