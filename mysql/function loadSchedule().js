function loadSchedule() {
  fetch("schedule.php")
    .then(res => res.json())
    .then(events => {
      const list = document.getElementById("event-list");
      list.innerHTML = "";
      events.forEach(event => {
        const li = document.createElement("li");
        li.textContent = event;
        list.appendChild(li);
      });
    });
}
