console.log("...loaded");

var $images = [
  "https://upload.wikimedia.org/wikipedia/en/3/34/UGK%28Underground_Kingz%29.JPG",
  "http://art.ngfiles.com/images/96000/96809_j-qb_afrika-bambaataa.png",
  "https://irapblog.files.wordpress.com/2014/03/queenlatifah.jpg?w=502&h=510&crop=1",
];

$(function(){

  $('.facedown').each(function(idx, ele){
    var $imageUrl =  $images[Math.floor(Math.random() * $images.length)], $maxImageUse = 2;
    while ($image[$imageUrl] >= $maxImageUse) {
      $imageUrl = $imageUrl + 1;
      if ($imageUrl >= $image.length){
        $imageUrl = 0;
      }

    }
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
   });

   $('table').on('click', '.active', function(){


     var $cell = $(this);

     $cell.find('img').hide();
     $cell.removeClass('active');
     $cell.addClass('facedown');
});
 });


 // $(function(){
 //
 //   $('.facedown').each(function(idx, ele){
 //     var $imageUrl =  $images[Math.floor(Math.random() * $images.length)];
 //      var $image = $('<img>').attr('src', $imageUrl);
 //      $(ele).append($image);
 //     $image.addClass('active');
 //     $image.hide();
 //   });
