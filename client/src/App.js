import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { intervals, getDate, slotTimes } from "../src/utils";
class App extends Component {
  constructor() {
    super();
  }
  render() {
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
            <input type="submit" value="Submit" />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
