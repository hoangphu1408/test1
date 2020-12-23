import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Home";
class Home extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Sidebar />
          <Content />
        </div>
      </Router>
    );
  }
}

export default Home;
