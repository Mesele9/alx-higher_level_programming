$(document).ready(function () {
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(body) {
    $.each(body.results, function (i, movie) {
      $('#list_movies').append('<li>' + movie.title + '</li>');
    });
  });
});
