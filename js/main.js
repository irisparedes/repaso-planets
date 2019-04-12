'use strict';

const planets = document.querySelector('.planet-list');
const url = 'https://swapi.co/api/planets/';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.results[1].name);
    console.log(data.results.length);

    // for (let i= 0;i<data.results.length;i++) {
    //   console.log(data.results[i].name);
    // }

    for (const planet of data.results) {
      console.log(planet.name);
      if (parseInt(planet.diameter) > 10000) {
        planets.innerHTML += `<li><h2>${planet.name}</h2><strong>${planet.diameter}</strong></li>`;
      } else {
        planets.innerHTML += `<li><h2>${planet.name}</h2><p>${planet.diameter}</p></li>`;
      }
      
    }
  });