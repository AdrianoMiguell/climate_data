const day_city = document.querySelector(".prev_today_city");
const error = document.querySelector(".error");
const icon = document.querySelector(".icon");
const climate = document.querySelector(".climate");
const umidity = document.querySelector(".umidity");
const wind = document.querySelector(".wind");
const condic = document.querySelector(".condic");
const nebul = document.querySelector(".nebul");

function errorLoc() {
    day_city.innerHTML = "";
    error.innerHTML = "Erro! Cidade não encontrada!";
    icon.innerHTML = "";
    climate.innerHTML = "";
    umidity.innerHTML = "";
    wind.innerHTML = "";
    condic.innerHTML = "";
    nebul.innerHTML = "";
}

export default errorLoc;