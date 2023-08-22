const appId = "38e06bc3527462a92fc298a6fb946c70";
const day_city = document.querySelector(".prev_today_city");
const climate_data = document.querySelector(".climate_data");
const icon = document.querySelector(".icon");
const climate = document.querySelector(".climate");
const umidity = document.querySelector(".umidity");
const wind = document.querySelector(".wind");
const condic = document.querySelector(".condic");
const nebul = document.querySelector(".nebul");

const city = {
  cityName: ["Petrolina"],
  stateCode: ["Pernambuco"],
  countryCode: ["BR"],
};

const coords = {
  lat: [-15.555, -10.8215],
  lon: [-47.1858, -50.4574],
};

const apiCity = `http://api.openweathermap.org/geo/1.0/direct?q=${city.cityName[0]},${city.stateCode[0]},${city.countryCode[0]}&limit=5&appid=${appId}`;

const getCityData = async (api_city) => {
  let responseCity = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city.cityName[0]},${city.stateCode[0]},${city.countryCode[0]}&limit=5&appid=${appId}`
  );
  let dataCity = await responseCity.json();
  let status = responseCity.status;

  if (dataCity[0] == undefined || status == 404) {
    console.error("Error, conection falled");
  } else {
    getClimateData(dataCity[0].lat, dataCity[0].lon);
    console.log(dataCity[0]);
  }
};

const getClimateData = async (lat, lon) => {
  const api_climate = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

  let response = await fetch(`${api_climate}`);
  let data = await response.json();

  console.log(data);
  let temp = convKC(data.main.temp);
  let velKM = velKmH(data.wind.speed);

  console.log(`temp: ${data.main.temp} (kelvin)  -  ${temp} (c°)`);
  console.log(`umidade: ${data.main.humidity} % `);
  console.log(`Velocidade do vento: ${velKM} km/h `);
  console.log(data.weather[0].main);

  showClimateData(data);
};

let getDayCity = () => {
  let date = new Date();
  let day = date.getDate();
  let m = date.getMonth();

  return `${day}/${m + 1}`;
};

const convKC = (temp) => {
  return Math.round(temp - 273.15);
};
const velKmH = (velM) => {
  return Math.round(velM * 3.6);
};

let showClimateData = async (data) => {
  let dayCity = getDayCity();
  let temp = convKC(data.main.temp);
  let velKM = velKmH(data.wind.speed);

  // imgIcon = [
  //   "<i class='bi bi-brightness-high-fill'></i>",
  //   "<i class='bi bi-cloud-sun-fill'></i>",
  //   "<i class='bi-brightness-alt-high-fill'></i>",
  //   "<i class='bi bi-cloud-drizzle-fill'></i>",
  //   "<i class='bi bi-clouds-fill'></i>",
  //   "<i class='bi bi-cloud-sun-fill'></i>",
  // ];

  const response = await fetch("./icons.json");
  const data_icon = await response.json();
  console.log(data_icon.icon);
  console.log(data_icon.icon.name[0]);

  day_city.innerHTML = `Previsão de hoje ${dayCity} ${city.cityName} - ${city.stateCode} `;

  let nLink = chooseIcon(data.weather[0].main);

  climate.innerHTML = `${temp}`;
  icon.innerHTML = `${data_icon.icon.link[nLink]}`;
  umidity.innerHTML = `umidade: ${data.main.humidity} %`;
  wind.innerHTML = `velocidade do vento: ${velKM}`;
  condic.innerHTML = `Condição:  ${data.weather[0].main}`;
  nebul.innerHTML = `Nebulosidade : ${data.clouds.all} %`;

};

let chooseIcon = (cloudStates) => {
  let num;

  switch (cloudStates) {
    case "Clear":
      num = 0;
      break;

    case "Clouds":
      num = 2;
      break;

    case "Rain":
      num = 3;
      break;

    case "Snow":
      num = 4;
      break;

    default:
      num = 3;
      break;
  }
  return num = 4;
};

getCityData(apiCity);
