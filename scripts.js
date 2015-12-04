

var $images = [
  "https://upload.wikimedia.org/wikipedia/en/3/34/UGK%28Underground_Kingz%29.JPG",
  "http://art.ngfiles.com/images/96000/96809_j-qb_afrika-bambaataa.png",
  "https://irapblog.files.wordpress.com/2014/03/queenlatifah.jpg?w=502&h=510&crop=1",
];

$(document).ready(function(){
  $('.facedown').each(function(idx, ele){
    var $imageUrl =  $images[Math.floor(Math.random() * $images.length < 2)];

     var $image = $('<img>').attr('src', $imageUrl);
      $(ele).append($image);
      $image.addClass('active');
      $image.hide();

});


   $('table').on('click', '.facedown', function(){

     var $cell = $(this);

    $cell.find('img').show();

     $cell.removeClass('facedown');

     $cell.addClass('active');



     var intervalid = setInterval(function(){

        var $scope = $cell;

      if (($('.active').attr("data-card")) === 2) {

        clearInterval(intervalid);
        (($('.active').attr("data-card")) != ($('.active').attr("data-card")));

      } else if (($('.active').attr("data-card")) != ($('.active').attr("data-card"))) {

        // var $cell = $(this);
        $cell.find('img').hide();
        $cell.removeClass('active');
        $cell.addClass('facedown');
        }
     else if (($('.active').attr("data-card")) === ($('.active').attr("data-card"))) {


       $scope.removeClass('facedown');
       $scope.addClass('active');
     } else {


       $scope.removeClass('active');
       $scope.addClass('facedown');
     }

     }, 1500);

   });

});
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
