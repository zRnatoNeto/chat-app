(function () {
    'use strict';

    angular
        .module('app.routes')
        .config(RoutesConfig)

    RoutesConfig.$inject = ['$routeProvider', '$locationProvider'];

    function RoutesConfig($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                controllerAs: 'loginController',
            })
            .when('/chat', {
                templateUrl: 'views/chat.html',
                controller: 'ChatController',
                controllerAs: 'chatController',
            })
            .otherwise({ redirectTo: '/' });
    }
}());