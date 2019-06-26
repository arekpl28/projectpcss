import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="one_fourth">
          <h3>Siste innlegg</h3>
          <ul>
            <li>
              <div className="triangle" />
              <Link to="/">Effektiviser faktureringen med Efaktura</Link>
            </li>
            <li>
              <div className="triangle" />
              <Link to="/">Automatiser dine banktransaksjoner</Link>
            </li>
            <li>
              <div className="triangle" />
              <Link to="/">Velkommen til frokostseminar!</Link>
            </li>
            <li>
              <div className="triangle" />
              <Link to="/">Visma Community</Link>
            </li>
            <li>
              <div className="triangle" />
              <Link to="/">Avslutning av Trainee-reisen med Visma.net</Link>
            </li>
          </ul>
        </div>
        <div className="one_fourth">
          <h3>Søk</h3>
          <form className="search_form" action="search" method="get">
            <input type="text" name="s" id="s" placeholder="Søk" />
            <button type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>
        <div className="one_fourth">
          <h3>Adresse</h3>
          <div className="address">
            <i className="fas fa-map-marker-alt" />
            <div className="wrap">
              <p className="text_1">PCSS.no er registrert som</p>
              <p className="text_2">PC-System Senteret AS</p>
              <p className="text_3">Rostgrenda 143, 2672 Sel</p>
              <p className="text_4">NO 968 067 591 MVA</p>
            </div>
          </div>
          <div className="tel">
            <i className="fas fa-phone" />
            <p className="tel">400 69 400</p>
          </div>
          <div className="mail">
            <i className="fas fa-envelope" />
            <a href="mailto:support@pcss.no">
              <p>support@pcss.no</p>
            </a>
          </div>
        </div>
        <div className="one_fourth">
          <h3>Nyhetsbrev</h3>
          <form className="mail" onSubmit="">
            <label htmlFor="name">
              <p>Navn</p>
              <input
                type="text"
                id="name"
                name="name"
                value=""
                placeholder="Ditt navn"
              />
            </label>
            <label htmlFor="useremail">
              <p>E-post:</p>
              <input type="email" id="useremail" name="useremail" />
            </label>
            <button>Abonner</button>
          </form>
        </div>
      </div>
      <div className="copyright_info">
        <div className="info">
          <p>
            Copyright © PC-System Senteret AS and PCSS.no, 1993-2018.
            Unauthorized use and/or duplication of this material without express
            and written permission from this site's author and/or owner is
            strictly prohibited. Excerpts and links may be used, provided that
            full and clear credit is given to PCSS with appropriate and specific
            direction to the original content.
          </p>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="https://facebook.com/pcssno">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/pcssas">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/pcss-no">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/pcssno">
                <i className="fab fa-youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.pcss.no/feed/">
                <i className="fas fa-rss" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
