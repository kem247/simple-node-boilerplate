// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML);
// import React, {Component} from "react";

document.addEventListener("DOMContentLoaded", () => {
  function fetchData() {
    fetch("http://localhost:3000/reservations")
      .then(reservations => reservations.json())
      .then(data => renderReservations(data));
  }

  function renderReservations(data) {
    //Tables

    for (let i = 1; i <= 10; i++) {
      let tableList = document.createElement("div");
      const table = document.querySelector("#table-detail");
      const addReservation1 = document.createElement("button");
      const blockRes = document.createElement("blockquote");
      const form = document.querySelector("#reservation-form");
      blockRes.className = "blockres";
      tableList.id = i;
      tableList.innerHTML += i;
      tableList.className = "dot";
      blockRes.append(addReservation1);
      tableList.append(blockRes);
      table.append(tableList);
      addReservation1.innerHTML = "Reserve Table";
      addReservation1.className = "reservation-button";

      addReservation1.addEventListener("click", () => addReservation());
      function addReservation() {
        const url = `http://localhost:3000/reservation/${tableList.id}`;
        const reqObj = {
          method: "GET"
        };
        fetch(url, reqObj).then(reqObj);
      }
    }
  }
  fetchData();
});
// const something = tm(something);
