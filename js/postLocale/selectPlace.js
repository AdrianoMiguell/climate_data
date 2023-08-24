const statesList = document.querySelector("#statesList");

function selectPlace(country, countries) {
  statesList.innerHTML = "";

  let stateCountries;

  console.log(countries);
  switch (country) {
    case "BR":
      stateCountries = countries.BR;
      break;
    case "US":
      stateCountries = countries.US;
      break;
    default:
      stateCountries = countries.BR;
      break;
  }

  for (let i = 0; i < stateCountries.length; i++) {
    statesList.innerHTML += ` <option value="${stateCountries[i]}"> </option> `;
  }
}

export default selectPlace;
