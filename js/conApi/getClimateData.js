async function getClimateData(key, lat, lon) {
  const api_climate = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

  let response = await fetch(`${api_climate}`);
  let data = await response.json();

  return data;
}

export default getClimateData;
