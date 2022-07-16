const month = [	"Jan", "Feb", "Mar", "Apr",	"May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const giveMeDate = document.querySelector(".date");
const giveMeDay = document.querySelector("#day");
const housrsAndMinutes = document.querySelector(".housrsAndMinutes");
const onlySeconds = document.querySelector(".seconds");

function showMeToday() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    housrsAndMinutes.innerHTML = `${hours}:${minutes}`;
    onlySeconds.innerHTML= `: ${seconds}`;
    giveMeDate.innerHTML = `${now.getFullYear()} ${month[now.getMonth()]} ${now.getDate()}`;
    giveMeDay.innerHTML = `${date[now.getDay()]}`;
}

showMeToday();
setInterval(showMeToday, 1000);