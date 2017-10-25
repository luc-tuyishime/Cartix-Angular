cartix.controller('communityCtrl', ['$scope', '$http','$anchorScroll','$location','$document', function($scope,$http,$anchorScroll,$location,$document){

  $scope.toTheTop = function() {
     $document.scrollTopAnimated(0, 5000).then(function() {
       console && console.log('You just scrolled to the top!');
     });
   }

  var section3 = angular.element(document.getElementById('About-community'));
  $scope.toSection3 = function() {
    $document.scrollToElementAnimated(section3);
  }
  var section4 = angular.element(document.getElementById('customers'));
  $scope.toSection4 = function() {
    $document.scrollToElementAnimated(section4);
  }
  var section5 = angular.element(document.getElementById('events'));
  $scope.toSection5 = function() {
    $document.scrollToElementAnimated(section5);
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



  $(document).ready(function(){
       // Add scrollspy to <body>
       $('body').scrollspy({target: ".navbar", offset: 50});
       // make responsive on all screen
       $(".community-text_").css("", $(window).height()-850);
       $(".bg-001").css("height", function(index){
           return $(window).height();
       })
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
           $('html, body').animate({
             scrollTop: $(hash).offset().top
           }, 1000, function(){
             // Add hash (#) to URL when done scrolling (default click behavior)
             window.location.hash = hash;
           });
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


}])
