cartix.controller('communityCtrl', ['$scope','$http','$anchorScroll','$location','$document',function($scope,$http,$anchorScroll,$location,$document){

   $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 5000).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }

    var section01 = angular.element(document.getElementById('About-community'));
    $scope.toSection01 = function() {
      $document.scrollToElementAnimated(section01);
    }
    var section4 = angular.element(document.getElementById('customers'));
    $scope.toSection4 = function() {
      $document.scrollToElementAnimated(section4);
    }
    var section5 = angular.element(document.getElementById('events'));
    $scope.toSection5 = function() {
      $document.scrollToElementAnimated(section5);
    }



  $(document).ready(function() {
   $(this).scrollTop(0);
  // Bind normal buttons
  Ladda.bind( '.button-demo button', { timeout: 2000 } );

  // Bind progress buttons and simulate loading progress
  Ladda.bind( '.progress-demo button', {
    callback: function( instance ) {
      var progress = 0;
      var interval = setInterval( function() {
        progress = Math.min( progress + Math.random() * 0.1, 1 );
        instance.setProgress( progress );

        if( progress === 1 ) {
          instance.stop();
          clearInterval( interval );
        }
      }, 200 );
    }
  } );
  });

  $("a.carousel-control").click(function(e){
    e.preventDefault();
     $(this).parent().carousel($(this).data("slide"));
 });

 $('.carousel').carousel({
     interval: false
 });


// Get the modal
var modal = document.getElementById('myModal');
// var modal2 = document.getElementById('myModal02');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var img6 = document.getElementById('myImg-main');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  if($(window).width() < 700){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}
img2.onclick = function(){
  if($(window).width() < 700){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}
img3.onclick = function(){
  if($(window).width() < 700){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}
img4.onclick = function(){
  if($(window).width() < 700){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}
img5.onclick = function(){
  if($(window).width() < 700){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}
img6.onclick = function(){
  if($(window).width() < 700){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-event")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-107520370-1');


  // $scope.scrollTo = function(scrollLocation){
  //   $location.hash(scrollLocation);
  //   $anchorScroll();
  // }
  $(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
     disableOn: 700,
     type: 'iframe',
     mainClass: 'mfp-fade',
     removalDelay: 160,
     preloader: false,

     fixedContentPos: false
    });
});

/* hide collapse after click*/
$('.nav a').click(function(){
  $('.collapse').collapse('hide');
});






  $(document).ready(function(){
       // Add scrollspy to <body>
      //  $('body').scrollspy({target: ".navbar", offset: 50});
       // make responsive on all screen
       $(".bg-001").css("padding-top", $(window).height()-800);
        //  $(".bg-001").css("height", function(index){
        //    return $(window).height();
        //  })
         if ( $(window).width() > 500) {
         $(".target-scroll").on('click', function(event) {
           // Make sure this.hash has a value before overriding default behavior
           if (this.hash !== "") {
             // Prevent default anchor click behavior
             // Store hash
             event.preventDefault();
             var hash = this.hash;
             // Using jQuery's animate() method to add smooth page scroll
             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
             $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
              });
           }  // End if
         });
      }
       // Add smooth scrolling on all links inside the navbar
        if ( $(window).width() > 500) {
        $(".nav a").on('click', function(event) {
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            // $('html, body').animate({
            //   scrollTop: $(hash).offset().top
            // }, 1000, function(){
            //   // Add hash (#) to URL when done scrolling (default click behavior)
            //   window.location.hash = hash;
            // });
          }  // End if
        });
      }

       $(document).on('click','.navbar-collapse.in',function(e) {
         if( $(e.target).is('a') ) {
             $(this).collapse('hide');
         }
     });

      var scroll_start = 0;
         var startchange = $('#About-community');
         var offset = startchange.offset();
          if (startchange.length){
             $(document).scroll(function() {
             scroll_start = $(this).scrollTop();
             if(scroll_start > offset.top) {
                 $(".navvv").css('background-color','#87ad5d');
              } else {
                 $('.navvv').css('background-color', 'transparent');
              }
          });
         }
      });

     var smallScreen = false;
         window.onresize = function(){
         if($(window).width() < 770) {
             smallScreen= false;
         }else {
             location.reload();
            }
         }


}]);
