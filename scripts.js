var $images = [
  "https://upload.wikimedia.org/wikipedia/en/3/34/UGK%28Underground_Kingz%29.JPG",
  "http://art.ngfiles.com/images/96000/96809_j-qb_afrika-bambaataa.png",
  "https://irapblog.files.wordpress.com/2014/03/queenlatifah.jpg?w=502&h=510&crop=1",
];

$(document).ready(function(){
  $('.facedown').each(function(idx, ele){
    var $imageUrl =  $images[Math.floor(Math.random() * $images.length < 2)];

     var $image = $('<img>').attr('src', $imageUrl);
      $(ele).data('card', $imageUrl);
      $(ele).append($image);
      $image.addClass('facedown');
      $image.hide();
});

   $('table').on('click', '.facedown', function(){

     var $cell = $(this);

    $cell.find('img').show();

     $cell.removeClass('facedown');

     $cell.addClass('active');

    if ($('.active').length === 2 ){
      var $cardOne = $('.active').eq(0);
      var $cardTwo = $('.active').eq(1);
      // var $cardOneFace = $('.facedown').eq(0);
      // var $cardTwoFace = $('.facedown').eq(1);
      if (  $cardOne.data('card') === $cardTwo.data('card') ) {
        // Flags that cards as complete
        // $('.active').removeClass('active');
        $('.active').hide();
        alert("Good job keep going.");

      }
      else
        var $interValid = setTimeout(function(){
         var $cards = $('.active');
         $cards.find('img').hide();
         $cards.removeClass('active');
         $cards.addClass('facedown');
         alert("Sorry, try again.");
       },500);

    }
    });

     $('table').on('click', '.facedown', function(){
       var $cell = $(this);

      $cell.find('img').show();

       $cell.removeClass('facedown');

       $cell.addClass('active');

     if (($('.active').length - 2) === 2 ){
       var $cardThree = $('.active').eq(0);
       var $cardFour = $('.active').eq(1);
        if ( $cardThree.data('card') === $cardFour.data('card') ) {
          $('.active').hide();
          alert("Bravo, en avance.");
        } else {
          setTimeout(function(){
               var $cards = $('.active');
               $cards.find('img').hide();
               $cards.removeClass('active');
               $cards.addClass('facedown');
               alert("Desole, essayer encore une fois.");
            },1000);
          }
     }
   }
);

$('table').on('click', '.facedown', function(){

    if (($('.active').length - 4) === 2 ){
      var $cardFive = $('.active').eq(0);
      var $cardSix = $('.active').eq(1);
      if ( $cardFive.data('card') === $cardSix.data('card') ) {
        $('.active').hide();
        alert("Fantastic, you won!");
      } else {
        setTimeout(function(){
          var $cardsTwo = $('.active');
          $cardsTwo.find('img').hide();
          $cardsTwo.removeClass('active');
          $cardsTwo.addClass('facedown');
          alert("Your bad, try again.");
        },1000);
      }
    }
});

$('.restart').each(function(idx, ele){
  alert('restart occured')
  if ($('.active').length === 0) {
  var $imageUrl =  $images[Math.floor(Math.random() * $images.length < 2)];

   var $image = $('<img>').attr('src', $imageUrl);
    $(ele).data('card', $imageUrl);
    $(ele).append($image);
    $image.addClass('facedown');
    $image.hide();
}
});

});

    //  reusing the beginning of the above if statement to look for two cards
    // if there are two cards, check their data and do the following:
    // either hide them and let the user try again or remove them and let the user continue to play.



    // Clears all congrats you won.
    // if this many cards do this. Zero cards left and you do this.
    //
    // If cards are removed we can add a class called dead to cards that were removed. Logic can check to for a specific total of dead and once reached user wins.
    //
    //
    // Eat more fish to improve your memory if clicked too many amount of times.







        // $cardOneFace.addClass('facedown');
        // $('.facedown').addClass('.facedown');
        // $('.active').removeClass('.active');
        // $('.facedown').show();
        // $('.active').hide();
        // $cell.find('img').show();
        // $cardOne.addClass('facedown');
        // $cardTwo.addClass('facedown');
        // $cardOne.removeClass('active');
        // $cardTwo.removeClass('active');
        //  $cell.removeClass('active');
        // $cardOne.addClass('facedown');
        // // $cardOne.removeClass('active');
        // $cardTwo.addClass('facedown');
        // $cardTwo.removeClass('active');
        //
        // Reset cardOne and cardTwo....
        // $('.facedown').show();
        // $('.facedown').addClass('facedown');
        // $('.active').addClass('active');
        // debugger
        // $('.active').hide();
        // $('.active').hide();
        // alert("sorry, try again.")
        // $(ele).find('img').show();

      // if ($('.active').length === 2 ) {
      //
      // }


      // Of active cords...
        // if data card is same... flag as complete
          // Good Job
       // if not same...
        // make them facedown



        // When a card is COMPLETE...
          // Remove ACTIVE...
              // If that means styling it with another class... so be it

      //  $cell.removeClass('.facedown');
      //  $cell.removeClass('.active');
      //  var $reVealed = $cell;
      //  $reVealed.find('img').hide();
      //  $reVealed.addClass('.revealed');

    //  else if ($.revealed.data(card) != $.revealed.data(card) ) {
    //    var $reVealed = $(this);
    //    $reVealed.find('img').hide();
    //    $reVealed.addClass('.revealed');
    //  }

    //  var intervalid = setInterval(function(){
     //
    //     var $scope = $cell;
     //
    //   if (($('.active').data("card")) === 2) {
     //
    //     clearInterval(intervalid);
    //     (($('.active').data("card")) != ($('.active').data("card")));
     //
    //   } else if (($('.active').data("card")) != ($('.active').data("card"))) {
     //
    //     // var $cell = $(this);
    //     $cell.find('img').hide();
    //     $cell.removeClass('active');
    //     $cell.addClass('facedown');
    //     }
    //  else if (($('.active').data("card")) === ($('.active').data("card"))) {
     //
     //
    //    $scope.removeClass('facedown');
    //    $scope.addClass('active');
    //  } else {
     //
     //
    //    $scope.removeClass('active');
    //    $scope.addClass('facedown');
    //  }
     //
    //  }, 1500);

    // If there are two active cards... check state
    // Check state
      // Of active cords...
        // if data card is same... flag as complete
          // Good Job
       // if not same...
        // make them facedown

    // If there are two active cards... check state
