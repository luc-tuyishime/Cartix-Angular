cartix.controller('homeCtrl', ['$scope', '$http','$anchorScroll','$location', function($scope,$http,$anchorScroll,$location){



  // window.addEventListener('onorientationchange',function(){
  //   console.log('orientation change');
  // },false)

  // $('body').scrollspy({target: ".navbar", offset: 50});
  // make responsive on all screen
  $(".top-margin").css("margin-top","height", $(window).height());
    // $(".bg-1").css("height", function(index){
    //    return $(window).height();
    // });


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-107520370-1');



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

    // $(window).resize(function() {
    //    $('.data').height($(window).height() - 26);
    //   });

  // $(window).trigger('resize');



          // Add scrollspy to <body>

          //  if ( $(window).width() > 500) {
          //    $(".target-scroll").on('click', function(event) {
          //      // Make sure this.hash has a value before overriding default behavior
          //      if (this.hash !== "") {
          //        // Prevent default anchor click behavior
          //        event.preventDefault();
          //        // Store hash
          //        var hash = this.hash;
          //        // Using jQuery's animate() method to add smooth page scroll
          //        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          //        // $('html, body').animate({
          //        //   scrollTop: $(hash).offset().top
          //        // }, 900, function(){
          //        //   // Add hash (#) to URL when done scrolling (default click behavior)
          //        //   window.location.hash = hash;
          //        // });
          //      }  // End if
          //    });
          //  }
        //  window.onorientationchange = function() { location.reload() };
     var smallScreen = false;

         window.onresize = function(){
         if($(window).width() < 770) {
             smallScreen= false;
         }else {
             location.reload();
            }
         }



}]);
