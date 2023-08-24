import apiKey from "./conApi/apiKey.js";
import listPlaces from "./postLocale/listPlaces.js";
import viewApiData from "./conApi/viewApiData.js";
import getCityData from "./conApi/getCityData.js";
import getClimateData from "./conApi/getClimateData.js";
import selectPlace from "./postLocale/selectPlace.js";
import errorLoc from "./postLocale/errorLoc.js";

const divError = document.querySelector(".alert");
const divInforms = document.querySelector(".div_informs");
const select = document.querySelector("select");
let optionCountry = document.querySelector("#country");

let countries = listPlaces();

for (let i = 0; i < countries.name.length; i++) {
  optionCountry.innerHTML += ` <option value="${countries.name[i]}"> ${countries.name[i]} </option> `;
}

// define the addEventListener
document.getElementById("btnForm").addEventListener("click", () => {
  sendCity();
});

select.addEventListener("change", () => {
  selectIndexPlace();
});

selectIndexPlace();

function selectIndexPlace() {
  let selected = select.options[select.selectedIndex].value;

  selectPlace(selected, countries);
  console.log(selected);
}

async function sendCity() {
  event.preventDefault();

  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  
  if (city == null || city == "") {
    divError.innerHTML = "Please enter a city";
    divError.style.display = "block";

    setTimeout(() => {divError.style.display = "none";}, 2500);

    console.error("Informe uma city");
    return false;
  }
  
  console.log("sendCity");
  divInforms.style.display = "grid";

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

    console.log(climateData);

    if (climateData.main != undefined) {
      document.querySelector(".div-spinner").style.display = "none";
    }

    viewApiData(climateData, cityData);
  }
}
