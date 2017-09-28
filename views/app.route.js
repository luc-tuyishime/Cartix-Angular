cartix.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
        templateUrl:'views/home/home.html'
    })
    .when('/cartix',{
        templateUrl:'views/cartix/cartix.html'
    })
    .when('/community',{
        templateUrl:'views/community/community.html'
    })
    .when('/faq',{
        templateUrl:'views/faq/faq.html'
    })
    .when('/privacy',{
        templateUrl:'views/privacy/privacy.html'
    })
    .when('/terms',{
        templateUrl:'views/terms/terms.html'
    })
    .when('/404',{
        templateUrl:'views/404/404.html'
    })
    .otherwise({
        redirectTo: 'views/404'
    });
}]);
