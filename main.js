'use strict';

function renderDogImage(response) {
  $('.results').append(`<img src="${response.message}" class="results-img">`);
}

function getDogImages() {
let breed= $('#breed-selector').val();
  fetch('https://dog.ceo/api/breed/'+ breed +'/images/random')
    .then(response => response.json())
    .then(responseJson => renderDogImage(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
 }


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  watchForm();
});