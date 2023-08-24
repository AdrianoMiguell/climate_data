const day_city = document.querySelector(".prev_today_city");
const error = document.querySelector(".error");
const climate_icon = document.querySelector(".climate_icon");
const icon = document.querySelector(".icon");
const climate = document.querySelector(".climate");
const umidity = document.querySelector(".umidity");
const wind = document.querySelector(".wind");
const condic = document.querySelector(".condic");
const nebul = document.querySelector(".nebul");

function errorLoc() {
    climate_icon.style.display = "none";
    day_city.innerHTML = "";
    error.innerHTML = "Erro! Cidade não encontrada!";
    icon.setAttribute("src", "");
    climate.innerHTML = "";
    umidity.innerHTML = "";
    wind.innerHTML = "";
    condic.innerHTML = "";
    nebul.innerHTML = "";
}

export default errorLoc;