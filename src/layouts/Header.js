import React, { Component } from "react";
import visma from "../image/visma.png";
import pcss from "../image/pcss.png";

import Nav from "../components/nav/Nav";

class Header extends Component {
  state = {
    active_bar: false
  };
  handleClickBars = () => {
    this.setState(prevState => ({
      active_bar: !prevState.active_bar
    }));
  };
  render() {
    const { active_bar } = this.state;
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
              <i className="fas fa-bars" onClick={this.handleClickBars} />
            </div>
            <div className={active_bar ? "defaultmenu active" : "defaultmenu"}>
              {active_bar ? <Nav /> : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
