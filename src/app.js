function displayTemperature(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

let apiKey = "f617fc313f1abac3b9f67f0a1a41e6c4";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);
