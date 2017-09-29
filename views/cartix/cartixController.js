cartix.controller('cartixCtrl', ['$scope', '$http','$anchorScroll','$location', function($scope,$http,anchorScroll,$location){

  // $scope.scrollTo = function(scrollLocation){
  //   $location.hash(scrollLocation);
  //   $anchorScroll();
  // }
  // $scope.toTheTop = function() {
  //    $document.scrollTopAnimated(0, 5000).then(function() {
  //      console && console.log('You just scrolled to the top!');
  //    });
  //  }
   var section3 = angular.element(document.getElementById('support'));
   $scope.toSection3 = function() {
     $document.scrollToElementAnimated(section3);
   }
   var section4 = angular.element(document.getElementById('pricing'));
   $scope.toSection3 = function() {
     $document.scrollToElementAnimated(section4);
   }
   var section5 = angular.element(document.getElementById('about-cartix'));
   $scope.toSection3 = function() {
     $document.scrollToElementAnimated(section5);
   }



  $(document).ready(function(){
          // Add scrollspy to <body>
          $('body').scrollspy({target: ".navbar", offset: 50});
          // make responsive on all screen
         $(".bg_01").css("margin-top", $(window).height()-950);
         //  $("").css("height", function(index){
         //      return $(window).height();
         //  })
           if ( $(window).width() > 500) {
          $(".target-scroll").on('click', function(event) {
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
              }, 900, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            }  // End if
          });
        }
           if ( $(window).width() > 500) {
          // Add smooth scrolling on all links inside the navbar
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
           // hide collapse link after click
          $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') ) {
                $(this).collapse('hide');
            }
        });
      });

}]).value('duScrollOffset', 30);
