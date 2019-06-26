import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../css/style.css";
import TopNav from "./TopNav";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="site_wrapper">
          <TopNav />
          <header>{<Header />}</header>
          <main>{<Page />}</main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
