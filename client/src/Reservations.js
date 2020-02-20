import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { intervals, getDate, slotTimes } from "../src/utils";
const Reservations = props => {
  return (
    <Card style={{ margin: "2vw" }}>
      <Card.Title style={{ marginTop: "1vw" }}>{props.slot}</Card.Title>
      <Card.Text>{intervals("1:00:00 PM", "10:00:00 PM")}</Card.Text>
      <div>
        <button
          type="button"
          style={{
            width: "7vw",
            fontSize: "1vw",
            backgroundColor: "#dcd0ff",
            color: "black"
          }}
          onClick={() => {
            props.addToReservation({
              reserveId: props.id,
              quantity: 1,
              add: true
            });
          }}
        >
          Add Reservation
        </button>
      </div>
    </Card>
  );
};

export default Reservations;
