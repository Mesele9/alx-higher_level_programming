#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const film = JSON.parse(body);
  film.characters.forEach(characterUrl => {
    request(characterUrl, (err, response, body) => {
      if (err) {
        console.log(err);
      }
      const characters = JSON.parse(body);
      console.log(characters.name);
    });
  });
});
