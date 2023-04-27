#!/usr/bin/node

const request = require('request');

const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}/`;

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const film = JSON.parse(body);

  film.characters.forEach((characterUrl, index) => {
    request(characterUrl, (err, response, body) => {
      if (err) {
        console.log(err);
      }
      const character = JSON.parse(body);
      console.log(`${character.name}`);
    });
  });
});
