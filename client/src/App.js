import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "./App.css";
import { fetchReservations } from "./store/getReservations";
import { intervals, getDate, slotTimes } from "../src/utils";
class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 1
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  //
  // componentDidMount() {
  //   let current = 0;
  //   this.fakeReservations.map((item,idx) => {
  //     if(item.slot === Date.now())
  //   })
  // }
  componentDidMount() {
    this.props.fetchReservations();
  }
  clickHandler(event) {
    let current = this.state.page;
    if (event.target.className === "rightClick") {
      this.setState({
        page: current + 1
      });
    } else {
      this.setState({
        page: current - 1
      });
    }
  }
  render() {
    console.log("PRPA", this.props);
    if (!Date.now) {
      Date.now = function() {
        return new Date().getTime();
      };
    }
    let theDate = Date.now();
    let nextDate = Date.now() + 86400000;
    let int = intervals("1:00:00 PM", "10:00:00 PM");
    return (
      <div
        style={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "15vw",
            marginTop: "0.50vw"
          }}
          className="dropdown"
          type="submit"
          onClick={this.handleSubmit}
        >
          <h1
            style={{
              marginTop: "3vw",

              marginBlockStart: "0vw",
              marginBlockEnd: "0vw"
            }}
            className="headline"
          >
            Fun Fun Restaurant
            <br />
          </h1>
        </div>

        <div className="upcomingheadline">
          <h5>Make A Reservation</h5>
        </div>
        <div
          className="dateDisplay"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: "50px"
            }}
          >
            {this.state.page < 1 && (
              <Button name="prev" onClick={this.clickHandler}>
                Prev
              </Button>
            )}
            {this.state.page > Math.ceil(1000 / 50) && (
              <Button name="next" onClick={this.clickHandler}>
                Next
              </Button>
            )}
          </span>
          {/* <span
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: "50px"
            }}
          >
            {getDate(theDate)}
          </span>
          <span style={{ display: "flex", flexDirection: "row" }}>
            {getDate(nextDate)}
          </span>
        </div>
        <div className="slotDisplay">
          <span
            style={{
              width: "4vw",
              height: "2vw",
              marginLeft: "1vw"
            }}
            className="dropdown"
            type="submit"
          >
            {[1, 2].map(n => {
              
              return (
                <select
                  key={n}
                  multiple
                  size="10"
                  style={{
                    width: "30vw",
                    height: "10vw",
                    marginRight: "50px"
                  }}
                >
                  {int.map((num, idx) => {
                    return (
                      <option value={idx} key={idx}>
                        {num + "PM"}
                      </option>
                    );
                  })}
                </select>
              );
            })}

            <input
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "35px"
              }}
              type="submit"
              value="Submit"
            />
          </span> */}
          {/* <button
            className="rightClick"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "right",
              justifyContent: "right",
              alignSelf: "right",
              marginLeft: "80vw"
            }}
          >
            Next
          </button>
          <button
            className="leftClick"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
              justifyContent: "left",
              alignSelf: "left",
              marginRight: "80vw"
            }}
          >
            Back
          </button> */}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    reservations: state.reservations
  };
};
const mapDispatch = dispatch => {
  return {
    fetchReservations: page => dispatch(fetchReservations(page))
  };
};
export default connect(mapState, mapDispatch)(App);
