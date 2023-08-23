import apiKey from "./conApi/apiKey.js";
import countries from "./postLocale/countries.js";
import viewApiData from "./conApi/viewApiData.js";
import getCityData from "./conApi/getCityData.js";
import getClimateData from "./conApi/getClimateData.js";
// import  from "./postLocale/postLoc.js";

// let request = new XMLHttpRequest();
// let getData = request.open('GET', '27.0.0.1:5500/index.html', false);
// console.log(request);

async function sendCity() {
  event.preventDefault();

  console.log("sendCity");

  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;

  let select = document.getElementById("country");
  let country = select.options[select.selectedIndex].value;

  console.log(city, state, country);

  startConnect(city, state, country);
}

async function startConnect(city, state, country) {
  let key = apiKey();

  // if(climateData.main != undefined) {
  document.querySelector(".spinner-border").style.display = "flex";
  // }

  if (key == undefined) {
    console.error(
      "Você não tem uma chave para usar a API. Please Subscribe to the openweathermap platform to use weather APIs that are fast and easy to work with."
    );
    stop();
  }

  let cityData = await getCityData(key, city, state, country);
  let lat = cityData.lat;
  let lon = cityData.lon;

  let climateData = await getClimateData(key, lat, lon);

  if (climateData.main != undefined) {
    document.querySelector(".spinner-border").style.display = "none";
  }

  viewApiData(climateData, cityData);
}

let optionCountry = document.querySelector("#country");
let country = countries();
console.log(country);

for (let i = 0; i < country.length; i++) {
  optionCountry.innerHTML += ` <option value="${country[i]}"> ${country[i]} </option> `;
}

document.getElementById("btnForm").addEventListener("click", () => {
  sendCity();
});
