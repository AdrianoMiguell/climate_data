const day_city = document.querySelector(".prev_today_city");
const error = document.querySelector(".error");
const icon = document.querySelector(".icon");
const climate_icon = document.querySelector(".climate_icon");
const climate = document.querySelector(".climate");
const umidity = document.querySelector(".umidity");
const wind = document.querySelector(".wind");
const condic = document.querySelector(".condic");
const nebul = document.querySelector(".nebul");

let getDayCity = () => {
  let date = new Date();
  let day = date.getDate();
  let m = date.getMonth();

  return `${day}/${m + 1}`;
};

const convKC = (tempK) => {
  return Math.round(tempK - 273.15);
};
const velKmH = (velM) => {
  return Math.round(velM * 3.6);
};

let chooseIcon = (cloudStates) => {
  let num;

  switch (cloudStates) {
    case "Clear":
      num = 0;
      break;
    case "Clouds":
      num = 4;
      break;
    case "Rain":
      num = 3;
      break;
    case "Snow":
      num = 2;
      break;
    default:
      num = 3;
      break;
  }

  return num;
};

async function viewApiData(climateData, cityData) {
  let temp = convKC(climateData.main.temp);
  let velKM = velKmH(climateData.wind.speed);
  let dayCity = getDayCity();

  error.innerHTML = "";
  climate_icon.style.display = "flex";
  day_city.innerHTML = `Previsão de hoje ${dayCity} ${cityData.name} - ${cityData.state} `;

  climate.innerHTML = `${temp} <span class='subscript'> °c <span>  `;
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${climateData.weather[0].icon}@2x.png`
  );
  umidity.innerHTML = `Umidade: ${climateData.main.humidity} %`;
  wind.innerHTML = `Velocidade do vento: ${velKM}`;
  condic.innerHTML = `Condição:  ${climateData.weather[0].main}`;
  nebul.innerHTML = `Nebulosidade : ${climateData.clouds.all} %`;
}

export default viewApiData;
