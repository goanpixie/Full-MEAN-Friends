var myApp = angular.module('myApp', ['ngRoute']);
//  use the config method to set up routing:
myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })

        .when('/friends/new', {
                templateUrl: 'partials/new.html',
                controller: 'newController'
        })

        .otherwise({
            redirectTo: '/'
        });
})
;
