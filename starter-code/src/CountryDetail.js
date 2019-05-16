import React, { Component } from "react";
// import countries from "./countries.json";

// import { Link } from "react-router-dom";

class CountryDetail extends Component {
  state = {};

  //   findCountry = country => {
  //     let flag = this.props.match ? this.props.match.params.id : "";
  //     return country.flag === id;
  //   };

  //   flag = this.props.match ? this.props.match.params.id : "";
  //     country = countries.find(item =>
  //       item.flag === this.props.match ? this.props.match.params.id : ""
  //     );
  //     console.log(country)

  //   borders = () => this.country.forEach(item => {});

  //   borders = () => {
  //     this.country.borders.forEach(item => {
  //       console.log(item);
  //       return <li>{item}</li>;
  //     });
  //   };

  render() {
    // console.log(this.state.id);
    // let id = this.props.match ? this.props.match.params.id : "";
    // console.log("id is ", id);

    let country = this.props.countries.find(
      item => item.flag === this.props.match.params.id
    );

    let bordersPop = () => {
      country.borders.forEach(item => {
        console.log(item);
        return <li>{item}</li>;
      });
      //   return <li>{this.item}</li>;
    };

    // console.log("=======================", country);

    // console.log(this.props.countries.find(this.findCountry));

    // console.log(this.props.match.params.id);

    //use that number and the js Find method to loop throught contries.json and return the correct country

    return (
      <React.Fragment>
        {/* <div className="col-4"> */}
        <h1>
          {" "}
          {country.flag} {country.name.common}
        </h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "60%" }}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {bordersPop()}

                  {/* <li>
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
                  </li> */}
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
