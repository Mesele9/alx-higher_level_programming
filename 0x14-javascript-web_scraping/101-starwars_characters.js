#!/usr/bin/node

const request = require('request');

const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}/`;
let characters = [];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const film = JSON.parse(body);
  characters = film.characters;
  getCharacters(0);
});

const getCharacters = (index) => {
  if (index === characters.length) {
    return;
  }

  request(characters[index], (err, response, body) => {
    if (err) {
      console.log(err);
    }
    const characterContent = JSON.parse(body);
    console.log(characterContent.name);
    getCharacters(index + 1);
  });
};
