console.log("...loaded");

var $images = [
  "https://upload.wikimedia.org/wikipedia/en/3/34/UGK%28Underground_Kingz%29.JPG",
  "http://art.ngfiles.com/images/96000/96809_j-qb_afrika-bambaataa.png",
  "https://irapblog.files.wordpress.com/2014/03/queenlatifah.jpg?w=502&h=510&crop=1",
];

// document ready funciton
$(function(){

// this setting images to exist and  hide
  $('.facedown').each(function(idx, ele){
    // here it's grabbing a random url and readying it
    var $imageUrl =  $images[Math.floor(Math.random() * $images.length)];
 // this is creating the image tag hence ('<img>')
     var $image = $('<img>').attr('src', $imageUrl);
 // this displaying it on the screen/putting it on the DOM hence 'append'
     $(ele).append($image);
 // then you need to add the class so that it's size fits
    $image.addClass('active');
    // then you need to hide it but have it ready when it is needed the hiding
    //  action could be moved to or before the display/append line of code.
    $image.hide();
  });

// selecting the table and telling the browser to listen for a click and making
// sure that was is clikced is facedown, if not, don't listen or it.

   $('table').on('click', '.facedown', function(){

 // when clicked , i have access to the 'td' which was clicked     var $cell = $(this);
 // after the click event, find me the image which is assigned and
 // display it on the DOM/browser
     var $cell = $(this);
     $cell.find('img').show();
     $cell.removeClass('facedown');
     $cell.addClass('active');
   });

   $('table').on('click', '.active', function(){

 // when clicked , i have access to the 'td' which was clicked
     var $cell = $(this);
      // after the click event, find me the image which is assigned and
      // hide it on the DOM/browser
     $cell.find('img').hide();
     $cell.removeClass('active');
     $cell.addClass('facedown');
   });

 });

var $imagesURL = $image[Math.floor(Math.random() * $images.length)];
