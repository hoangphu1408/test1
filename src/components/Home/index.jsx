import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Test1 from "../Test1";
import Test2 from "../Test2";
import "./styles.css";
class Content extends Component {
  render() {
    return (
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-justify" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="abc" data-toggle="dropdown">
                    Settings
                  </a>
                  <div className="dropdown">
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a className="dropdown-item" href="abc">
                        Profile
                      </a>
                      <a className="dropdown-item" href="abc">
                        Logout
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Test1 />
          </Route>
          <Route exact path="/home2">
            <Test2 />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Content;
