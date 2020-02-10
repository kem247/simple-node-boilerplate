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

      blockRes.className = "blockres";
      tableList.id = i;
      tableList.innerHTML += i;
      tableList.className = "dot";
      blockRes.append(addReservation1);
      tableList.append(blockRes);
      table.append(tableList);
      // table.append(form);
      addReservation1.innerHTML = "Reserve Table";
      addReservation1.className = "reservation-button";

      addReservation1.addEventListener("click", () => addReservation());

      function addReservation() {
        const form = document.querySelector("#reservation-form");
        let formList = document.createElement("div");
        const h1 = document.createElement("h1");
        const date = document.createElement("div");
        const slot = document.createElement("ul");
        const blockCode = document.createElement("blockquote");
        //DATE
        let today = new Date();
        for (let j = 1; j <= 7; j++) {
          let days = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + j
          );
          console.log("days", days);
        }
        slot.className = "slot";
        date.innerText = new Date();
        for (let i = 1; i <= 5; i++) {
          slot.innerText += i;
        }
        blockCode.append(h1, date, slot);
        formList.append(blockCode);
        form.append(formList);
        const url = `http://localhost:3000/reservations/${tableList.id}`;
        const reqObj = {
          method: "GET"
        };
        fetch(url, reqObj)
          .then(response => response.json())
          .then(data => console.log(data));
      }
    }
  }
  fetchData();
});
// const something = tm(something);
