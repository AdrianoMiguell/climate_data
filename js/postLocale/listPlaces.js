function listPlaces() {
  let statesOfUS = [
    "Alabama",
    "Indiana",
    "New York",
    "Alasca",
    "Iowa",
    "New México",
    "Arkansas",
    "Kansas",
    "Oklahoma",
    "Arizona",
    "Kentucky",
    "Ohio",
    "Califórnia",
    "Louisiana",
    "Oregon",
    "Carolina do Norte",
    "Maine",
    "Pennsylvania",
    "Carolina do Sul",
  ];

  let statesOfBR = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
    "Distrito Federal",
  ];

  return {
    name: ["BR", "US"],
    BR: statesOfBR,
    US: statesOfUS,
  };

  // ["BR", "AR", "US"];
}

export default listPlaces;
