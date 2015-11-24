console.log("...loaded");

$(document).ready(function() {
  init();
  // reStart();
  // play();
});

function init() {

  $(".start").on('click', function() {
    $("h1").toggle();
    $("h2").toggle();
});
}; init();

// function reStart() {
//
//   $(".restart").on('click', function() {
//     $("h1").show();
//     $("h2").show();
//   });
// };reStart();


// function play() {
//   $("#rowone").on('dblclick', function() {
//     $(".card-one").hide();
//     $(".card-two").show();
//   });
// };
// play();
