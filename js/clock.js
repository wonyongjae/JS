const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const now = new Date();
  const eve = new Date(`December 25, ${now.getFullYear()} 00:00:00`);
  const diff = Math.floor((eve.getTime() - now.getTime()) / 1000);

  const seconds = String(Math.floor(diff % 60)).padStart(2, "0");
  const minutes = String(Math.floor((diff / 60) % 60)).padStart(2, "0");
  const hours = String(Math.floor(diff / 60 / 60) % 24).padStart(2, "0");
  const days = String(Math.floor(diff / 60 / 60 / 24)).padStart(2, "0");

  clockTitle.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getTime();
setInterval(getTime, 1000);
