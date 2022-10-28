const traveler = {
    name: "Jacques",
    countries: [
      {
        name: "England",
        year: 2013
      },
      {
        name: "Spain",
        year: 2004
      },
      {
        name: "France",
        year: 2012
      },
      {
        name: "Italy",
        year: 2022
      }
    ]
  };
  

  fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(traveler)
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err.message);
    });