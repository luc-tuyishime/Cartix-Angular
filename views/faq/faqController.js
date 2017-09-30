cartix.controller('faqCtrl', ['$scope', '$http','$anchorScroll','$location', function($scope,$http,anchorScroll,$location){

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


}]).value('duScrollOffset', 30);
