const loc = document.getElementById("loc")

const api = "deccb29c6bf567a190fd25d25e0e30e4"

function getGeo(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    loc.innerHTML = `lat: ${lat}, long:${long}`
    const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}`
    fetch(url).then(response => response.json()).then(data => {
     
        const city = document.getElementById("city")
        const weather = document.getElementById("weather")
        city.innerHTML = data.name;
        weather.innerHTML = data.weather[0].main;
    })
}

function onErr() {
    console.log("not working");
}

navigator.geolocation.getCurrentPosition(getGeo, onErr)

