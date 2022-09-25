function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
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
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "aa3f53c0e34a617442f56df884783d68";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayTemperature);

// Feature #1
// let now = new Date();

// let liDate = document.querySelector("#date");

// let hours = now.getHours();
// let minutes = now.getMinutes();

// let days = [
//  "Sunday",
//  "Monday",
//  "Tuesday",
//  "Wednesday",
//  "Thursday",
//  "Friday",
//  "Saturday",
// // ];
// let day = days[now.getDay()];

// liDate.innerHTML = `${day} ${hours}:${minutes}`;

// Feature #2
//function searchCity(event) {
//event.preventDefault();
//let cityInput = document.querySelector("#city-input");
//let h1City = document.querySelector("#city");
//h1City.innerHTML = `${cityInput.value}`;
//}

//let searchForm = document.querySelector("#search-form");
//searchForm.addEventListener("submit", searchCity);

// Feature #3
// function changeToFahrenheit(event) {
//  event.preventDefault();
//  let temperature = document.querySelector("#temperature");
//  temperature.innerHTML = "81";
// }

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", changeToFahrenheit);

// function changeToCelsius(event) {
// event.preventDefault();
// let temperature = document.querySelector("#temperature");
// temperature.innerHTML = "27";
// }

// // let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", changeToCelsius);

///////////////////////
// function displayWeather(response) {
//  document.querySelector("#city").innerHTML = response.data.name;
//  document.querySelector("#temperature").innerHTML = Math.round(
// //   response.data.main.temp
//  );
// }

// function searchCity(event) {
// event.preventDefault();
//  let apiKey = "aa3f53c0e34a617442f56df884783d68";
//  let city = document.querySelector("#city-input").value;
//  let units = "metric";
//  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
// //  axios.get(apiUrl).then(displayWeather);
// }
// let searchForm = document.querySelector("#search-form");
// searchForm.addEventListener("submit", searchCity);

// function searchLocation(position) {
// let apiKey = "aa3f53c0e34a617442f56df884783d68";
// let units = "metric";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
// axios.get(apiUrl).then(displayWeather);
// }

// function getLocation(event) {
//  event.preventDefault();
// //  navigator.geolocation.getCurrentPosition(searchLocation);
// }
// // let currentButton = document.querySelector("#current");
// currentButton.addEventListener("click", getLocation);
///
