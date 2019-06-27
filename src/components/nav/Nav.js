import React, { Component } from "react";
import { Link } from "react-router-dom";
import Service from "../nav/Service";
import About from "../nav/About";

class Nav extends Component {
  state = {
    active_service: false,
    active_about: false,
    integrations_active: false
  };

  handleClickActiveService = () => {
    this.setState(prevState => ({
      active_service: !prevState.active_service,
      active_about: false,
      integrations_active: false
    }));
  };

  handleClickActiveAbout = () => {
    this.setState(prevState => ({
      active_about: !prevState.active_about,
      active_service: false,
      integrations_active: false
    }));
  };

  handleClickIntegrations = () => {
    this.setState(prevState => ({
      integrations_active: !prevState.integrations_active
    }));
  };

  render() {
    const { active_service, active_about, integrations_active } = this.state;
    return (
      <>
        <ul>
          <li>
            <Link to="/">Hjem</Link>
          </li>
          <li>
            <Link to="/">Support</Link>
          </li>
          <li>
            <Link to="/">Nyheter</Link>
          </li>
          <li>
            <Link
              to="#"
              className={
                active_service
                  ? "menu-item service active"
                  : "menu-item service"
              }
              onClick={this.handleClickActiveService}
            >
              <p>Tjenester</p>
              <i
                className={
                  active_service
                    ? "fas fa-chevron-right icon"
                    : "fas fa-chevron-right"
                }
              />
            </Link>
          </li>
          {active_service ? (
            <Service
              click={() => this.handleClickIntegrations(integrations_active)}
              integrations_active={integrations_active}
            />
          ) : null}
          <li>
            <Link
              to="#"
              className={
                active_about ? "menu-item about active" : "menu-item about"
              }
              onClick={this.handleClickActiveAbout}
            >
              <p>Om Oss </p>
              <i
                className={
                  active_about
                    ? "fas fa-chevron-right icon "
                    : "fas fa-chevron-right"
                }
              />
            </Link>
          </li>
          {active_about ? <About /> : null}
          <li>
            <Link to="/">Kontakt Oss</Link>
          </li>
          <li>
            <Link to="/">Personvernerklaering</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Nav;
