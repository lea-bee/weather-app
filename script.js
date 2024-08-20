function temperatureDisplay(response) {
  let temperature = Math.round(response.data.temperature.current);
  let cityName = document.querySelector("#current-city");
  cityName.innerHTML = response.data.city;

  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = `${temperature}`;
}

function cityDisplay(event) {
  event.preventDefault();
  let citySearched = document.querySelector("#searched");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = citySearched.value;
  let city = citySearched.value;
  //let apiKey = "et9o12f3b1437b5dda065b3e80a5ef38";
  //let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  //axios.get(apiUrl).then(temperatureDisplay);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", cityDisplay);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateElement = document.querySelector("#current-time");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);
