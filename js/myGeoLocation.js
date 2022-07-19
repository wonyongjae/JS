const myLocation = document.querySelector("#location");
const weather = document.querySelector("#weather");
const temperature = document.querySelector("#temperature");
const tempSymbol = document.querySelector("#temp")

function success(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "17a186edef4bb4a765fc7d203daa3a99";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        myLocation.innerHTML = `${data.name}`;
        weather.innerHTML = `${data.weather[0].main}`;
        temperature.innerHTML = `${data.main.temp.toFixed(1)}`;
        tempSymbol.innerHTML = "℃";
    });
}
 
function error(){
    temperature.innerHTML = "Um... Where are you...?"
}


navigator.geolocation.getCurrentPosition(success, error);