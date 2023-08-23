import apiKey from "./conApi/apiKey.js";
import countries from "./postLocale/countries.js";
import viewApiData from "./conApi/viewApiData.js";
import getCityData from "./conApi/getCityData.js";
import getClimateData from "./conApi/getClimateData.js";
import errorLoc from "./postLocale/errorLoc.js";

const divInforms = document.querySelector(".div_informs");

let optionCountry = document.querySelector("#country");
let country = countries();
console.log(country);

for (let i = 0; i < country.length; i++) {
  optionCountry.innerHTML += ` <option value="${country[i]}"> ${country[i]} </option> `;
}

document.getElementById("btnForm").addEventListener("click", () => {
  sendCity();
});

async function sendCity() {
  event.preventDefault();

  console.log("sendCity");
  divInforms.style.display = "grid";

  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;

  let select = document.getElementById("country");
  let country = select.options[select.selectedIndex].value;

  console.log(city, state, country);

  startConnect(city, state, country);
}

async function startConnect(city, state, country) {
  let key = apiKey();

  document.querySelector(".div-spinner").style.display = "flex";

  if (key == undefined) {
    console.error(
      "Você não tem uma chave para usar a API. Please Subscribe to the openweathermap platform to use weather APIs that are fast and easy to work with."
    );
    stop();
  }

  let cityData = await getCityData(key, city, state, country);

  if (cityData.error == undefined || cityData.error == "error") {
    errorLoc();
    document.querySelector(".div-spinner").style.display = "none";
  } else if (cityData.error == "not") {
    let lat = cityData.lat;
    let lon = cityData.lon;

    let climateData = await getClimateData(key, lat, lon);

    if (climateData.main != undefined) {
      document.querySelector(".div-spinner").style.display = "none";
    }

    viewApiData(climateData, cityData);
  }
}
