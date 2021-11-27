const API_KEY = "2104544839a09dd25a899660b5baf344";

function onGEOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const WEATHER = document.querySelector("#weather span:first-child");
      const CITY = document.querySelector("#weather span:last-child");
      CITY.innerText = data.name;
      WEATHER.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      var img =
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
      const weatherIcon = document.createElement("img");
      const IMGBOX = document.querySelector(".weather");
      weatherIcon.src = `${img}`;
      IMGBOX.appendChild(weatherIcon);
    });
}
function onGEERROR() {
  alert("노오오오");
}
navigator.geolocation.getCurrentPosition(onGEOK, onGEERROR);
