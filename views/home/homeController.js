cartix.controller('homeCtrl', ['$scope', '$http','$location', function($scope,$http,$location){

  var section1 = angular.element(document.getElementById('bottom'));
  $scope.toSection3 = function() {
    $document.scrollToElementAnimated(section1);
  }

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

          // Add scrollspy to <body>
          // $('body').scrollspy({target: ".navbar", offset: 50});
          // make responsive on all screen
          $(".top-margin").css("margin-top", $(window).height()-630);
          $(".bg-1").css("height", function(index){
              return $(window).height();
          })
          // if ( $(window).width() > 500) {
          //   $(".target-scroll").on('click', function(event) {
          //     // Make sure this.hash has a value before overriding default behavior
          //     if (this.hash !== "") {
          //       // Prevent default anchor click behavior
          //       event.preventDefault();
          //       // Store hash
          //       var hash = this.hash;
          //       // Using jQuery's animate() method to add smooth page scroll
          //       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          //       // $('html, body').animate({
          //       //   scrollTop: $(hash).offset().top
          //       // }, 900, function(){
          //       //   // Add hash (#) to URL when done scrolling (default click behavior)
          //       //   window.location.hash = hash;
          //       // });
          //     }  // End if
          //   });
          // }
        //  window.onorientationchange = function() { location.reload() };


}])
