// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML);

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
        // e.preventDefault();
        // const newName = document.querySelector("reservation-name").value;
        // const date = document.querySelector("Date").value;
        // const time = document.querySelector("Time").value;
        const url = `http://localhost:3000/reservations/${tableList.id}`;

        // const reqObj = {
        //   method: "GET"
        //   // headers: { "Content-Type": "application/json" }
        //   // body: JSON.stringify({
        //   //   name: newName,
        //   //   date: date,
        //   //   time: time
        //   // })
        // };
        // const formData = new FormData(
        //   document.querySelector("#reservation-form")
        // );
        // return fetch(url, {
        //   method: "POST",
        //   body: formData
        // }).then(response => response.json());
        fetch(url)
          .then(r => r.json())
          .then(data => {
            let sp = document.createElement("input");
            sp.setAttribute("id", "newInputField");
            sp.setAttribute("name", "newInputField");
            blockRes.appendChild(sp);
          });
      }
    }
  }
  fetchData();
});
// const something = tm(something);
