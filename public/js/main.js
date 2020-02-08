// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML);

document.addEventListener("DOMContentLoaded", () => {
  function fetchData() {
    fetch("http://localhost:3000/reservations")
      .then(reservations => reservations.json())
      .then(data => renderReservations(data));
  }
  function renderReservations(data) {
    for (const q of data) {
      const resList = document.querySelector("#reservation-detail");
      const resUL = document.createElement("li");
      resList.append(resUL);
    }
  }
  fetchData();
});
// const something = tm(something);
