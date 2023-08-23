const day_city = document.querySelector(".prev_today_city");
const climate_data = document.querySelector(".climate_data");
const icon = document.querySelector(".icon");
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
  return (num = 4);
};

async function viewApiData(climateData, cityData) {
  let temp = convKC(climateData.main.temp);
  let velKM = velKmH(climateData.wind.speed);
  let dayCity = getDayCity();

  const response = await fetch("../json/icons.json");
  const data_icon = await response.json();

  day_city.innerHTML = `Previsão de hoje ${dayCity} ${cityData.name} - ${cityData.state} `;

  let nLink = chooseIcon(climateData.weather[0].main);

  climate.innerHTML = `${temp}`;
  icon.innerHTML = `${data_icon.icon.link[nLink]}`;
  umidity.innerHTML = `umidade: ${climateData.main.humidity} %`;
  wind.innerHTML = `velocidade do vento: ${velKM}`;
  condic.innerHTML = `Condição:  ${climateData.weather[0].main}`;
  nebul.innerHTML = `Nebulosidade : ${climateData.clouds.all} %`;
}

export default viewApiData;
