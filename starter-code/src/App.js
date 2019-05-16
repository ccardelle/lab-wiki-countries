/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import "./App.css";
import CountryDetail from "./CountryDetail";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import CountryList from "./countries.json";

class App extends Component {
  state = {
    countries: CountryList
  };

  displayCountryList = () => {
    let CountryListCopy = this.state.countries.map((country, i) => {
      return (
        <NavLink
          key={i}
          className="list-group-item list-group-item-action"
          activeClassName="selected"
          to={`/country/${country.name.common}`}
        >
          {country.flag}
          {country.name.common}
        </NavLink>
      );
    });
    return CountryListCopy;
  };
  render() {
    return (
      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div
                className="col-5"
                style={{ maxHeight: "90vh", overflow: "scroll" }}
              >
                <div className="list-group">{this.displayCountryList()}</div>
              </div>

              <div className="countryDetail">
                <Switch>
                  <Route
                    exact
                    path="/country/:id"
                    render={() => (
                      <CountryDetail countries={this.state.countries} />
                    )}
                  />
                  {/* <Route
                    exact
                    path="/country/:id"
                    component={CountryDetail}
                    countries={this.state.countries}
                  /> */}
                </Switch>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
