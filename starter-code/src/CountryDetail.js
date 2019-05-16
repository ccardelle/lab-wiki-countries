import React, { Component } from "react";
// import { Link } from "react-router-dom";

class CountryDetail extends Component {
  state = {
    countries: this.props.countries
  };

  //   findCountry = country => {
  //     let flag = this.props.match ? this.props.match.params.id : "";
  //     return country.flag === id;
  //   };

  // flag = this.props.match ? this.props.match.params.id : "";
  //   result = this.state.countries.find(item =>
  //     item.flag === this.props.match ? this.props.match.params.id : ""
  //   );

  render() {
    // console.log(this.props.match);
    // let id = this.props.match ? this.props.match.params.id : "";
    // console.log("id is ", id);

    let result = this.state.countries.find(
      item => item.name.common === this.props.match.params.id
    );
    console.log(result);
    // console.log(this.props.countries.find(this.findCountry));

    // console.log(this.props.match.params.id);

    //use that number and the js Find method to loop throught contries.json and return the correct country

    return (
      <React.Fragment>
        {/* <div className="col-4"> */}
        <h1>France</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "60%" }}>Capital</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                551695 km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li>
                    <a href="/AND">Andorra</a>
                  </li>
                  <li>
                    <a href="/BEL">Belgium</a>
                  </li>
                  <li>
                    <a href="/DEU">Germany</a>
                  </li>
                  <li>
                    <a href="/ITA">Italy</a>
                  </li>
                  <li>
                    <a href="/LUX">Luxembourg</a>
                  </li>
                  <li>
                    <a href="/MCO">Monaco</a>
                  </li>
                  <li>
                    <a href="/ESP">Spain</a>
                  </li>
                  <li>
                    <a href="/CHE">Switzerland</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default CountryDetail;
