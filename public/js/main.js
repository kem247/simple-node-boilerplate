// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML);

document.addEventListener("DOMContentLoaded", () => {
  function fetchData() {
    fetch("http://localhost:3000/reservations")
      .then(reservations => reservations.json())
      .then(data => renderReservations(data));
  }

  function renderReservations(data) {
    for (const r of data) {
      //Tables
      const table = document.querySelectorAll("#table-reservation");
      const tableList = document.querySelector(".dot");
      console.log("table", tableList);
      const addReservation1 = document.createElement("button");
      // const addReservation2 = document.querySelector(".dot #2");
      // const addReservation3 = document.querySelector(".dot #3");
      // const addReservation4 = document.querySelector(".dot #4");
      // const addReservation5 = document.querySelector(".dot #5");
      // const addReservation6 = document.querySelector(".dot #6");
      // const addReservation7 = document.querySelector(".dot #7");
      // const addReservation8 = document.querySelector(".dot #8");
      // const addReservation9 = document.querySelector(".dot #9");
      // const addReservation10 = document.querySelector(".dot #10");
      //Reservations
      const resUL = document.querySelector("#reservation-detail");
      const resList = document.createElement("li");
      console.log("li", resList);
      const blockQuote = document.createElement("blockquote");
      console.log("res", blockQuote);
      const p = document.createElement("p");
      const footer = document.createElement("footer");
      const br = document.createElement("br");
      const hr = document.createElement("hr");

      resList.className = "res-card";
      // tableList.className = "dot";sdf
      blockQuote.className = "blockQuote";
      p.className = "mb-0";
      footer.className = "blockquote-footer";
      // resList.dataset.id = r.id;

      // p.innerHTML = r.name;
      // footer.innerHTML = r.slot;

      table.append(addReservation1);
      tableList.append(table);
      // table.append(tableList);
      // resUL.append(resList);

      addReservation1.innerHTML = "Reserve Table";
      addReservation1.className = "something";
      addReservation1.addEventListener("click", () => addReservation());
    }
  }
  fetchData();
});
// const something = tm(something);
