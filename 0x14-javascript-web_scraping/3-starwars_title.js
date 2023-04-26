#!/usr/bin/node

const request = require('request');
const id = process.argv[2];

request(`https://swapi-api.alx-tools.com/api/films/${id}`, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const movie = JSON.parse(body);
  console.log(movie.title);
});
