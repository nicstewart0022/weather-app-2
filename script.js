function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentMonth = months[date.getMonth()];

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${currentDay}, ${currentMonth} ${date.getDate()}, ${hours}:${minutes}`;
}
let now = new Date();
let h1 = document.querySelector("h1");
h1.innerHTML = formatDate(now);

//Challenge 1: change city name to what is searched

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
  let city = `${searchInput.value}`;
  let apiKey = "b9f1b5b4a8b07e121a5baf80f5ff5702";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(getTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//Challenge 2: display current temp of city searched

function getTemperature(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.main.temp);
  currentTemperature.innerHTML = `${temperature}°F`;
}

//Bonus: add a current location button & when clicked it uses you geolocation API
//to get coordinates and displays city and current temperature using OpenWeather API

function getGeoLocation(response) {}

function retrievePosition(position) {
  let apiKey = "b9f1b5b4a8b07e121a5baf80f5ff5702";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  axios.get(url).then(getTemperature);
}
navigator.geolocation.getCurrentPosition(retrievePosition);

let location = document.querySelector("#current-city");
location.addEventListener("submit", getGeoLocation);
