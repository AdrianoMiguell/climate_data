// const city = {
//   cityName: ["Petrolina"],
//   stateCode: ["Pernambuco"],
//   countryCode: ["BR"],
// };

async function getCityData(key, city, stateCode, countryCode) {
  let responseCity = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&limit=5&appid=${key}`
  );

  let dataCity = await responseCity.json();
  let status = responseCity.status;

  if (dataCity[0] == undefined || status == 404) {
    console.error("Error, conection falled");
  } else {
    console.log("City data retrieved successfully!");
  }

  return {
    name: dataCity[0].name,
    state: dataCity[0].state,
    lat: dataCity[0].lat,
    lon: dataCity[0].lon,
  };
}

export default getCityData;
