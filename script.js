var app = angular.module("computer", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'pages/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'MainCtrl'
        })    
        .when('/services', {
            templateUrl: 'pages/services.html',
            controller: 'ServicesCtrl'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'ContactCtrl'
        })
        .otherwise({ redirectTo: '/main' });
}]);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('data/services.json').then(function(response) {
       $scope.services = response.data; 
    });
}]);

app.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('data/services.json').then(function(response) {
        $scope.services = response.data;
    });
}]);

app.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('data/locations.json').then(function(response) {
       $scope.locations = response.data; 
    });
}]);