cartix.controller('privacyCtrl', ['$scope', '$http','$anchorScroll','$location', function($scope,$http,anchorScroll,$location){

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-107520370-1');
  
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

  $(document).ready(function() {
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


}]).value('duScrollOffset', 30);
