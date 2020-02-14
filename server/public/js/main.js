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
        const newBlock = document.createElement("blockquote");
        const ThankYou = document.createElement("div");
        //DATE
        function slotTimes() {
          for (let i = 1; i <= 10; i++) {
            slot.innerHTML +=
              "<div id=addId_ class='custom-select'style='width:200px;'> " +
              i +
              " PM  <select> <option value='0'>Reserve:</option>  <option value='1'>Select</option> </select> </div>";
          }

          return slot;
        }
        if (!Date.now) {
          Date.now = function() {
            return new Date().getTime();
          };
        }
        let theDate = Date.now();

        document.getElementById("date").innerText = getTheDate(theDate);

        document.getElementById("next").addEventListener("click", e => {
          e.preventDefault();
          e.stopPropagation();
          theDate += 86400000;
          document.getElementById("date").innerText = getTheDate(theDate);
        });

        function getTheDate(getDate) {
          let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ];
          let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];
          let theCDate = new Date(getDate);
          return (
            days[theCDate.getDay()] +
            ", " +
            theCDate.getDate() +
            "-" +
            months[theCDate.getMonth()] +
            "-" +
            theCDate.getFullYear()
          );
        }

        slot.className = "slot";
        ThankYou.innerHTML = "Thank You!";
        blockCode.append(h1, date, slot);
        formList.append(blockCode);
        form.append(formList);
        let selectSlot = document.getElementById("addId_");
        // slot.addEventListener("change", e => {
        //   newBlock.append(ThankYou);
        //   e.preventDefault();
        //   document.getElementById("date").remove();
        //   blockCode.remove();
        // });
        const url = `http://localhost:3000/reservations/${tableList.id}`;
        const reqObj = {
          method: "GET"
        };
        fetch(url, reqObj)
          .then(response => response.json())
          .then(data => console.log(data));
        slotTimes();
      }
    }
  }
  fetchData();
});
// const something = tm(something);
