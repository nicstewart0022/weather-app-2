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

let apiKey = "b9f1b5b4a8b07e121a5baf80f5ff5702";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
let cityName = (text.innerHTML = `${search - form.value}`);

function getCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-form");
  input.addEventListener("submit", getCity);
}
console.log(input);

function displayCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  h1.innerHTML = "${cityName}";
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `It is ${temperature}℃ in ${cityName}.`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
