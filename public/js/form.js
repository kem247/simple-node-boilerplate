<div>
  <form method="GET" action={`/reservations/${1}`} id="reservation-form">
    <div class="form-group">
      <label for="reservation-name">First & Last Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="First & Last Name"
      />
    </div>
    <div class="form-group">
      <label for="Date">Reservation Date</label>
      <input type="date" class="form-control" id="date" min="2020-02-11" />
    </div>
    <div class="form-group">
      <label for="Time">Reservation Time</label>
      <input
        type="time"
        class="form-control"
        id="time"
        min="13:00"
        max="22:00"
        step="60"
      />
    </div>
    <button type="submit" class="btn btn-primary">
      Make Reservation
    </button>
  </form>
</div>;
