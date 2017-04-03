angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "../views/about.html"
            })
            .state('aboutAdventures', {
                url: '/aboutAdventures',
                templateUrl: '../views/about-adventurers.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: '../views/about.html'
            })
            .state('booked', {
                url: '/booked',
                templateUrl: '../views/booked.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '../views/contact.html'
            })
            .state('locations', {
                url: '/locations',
                templateUrl: '../views/locations.html'
            })
            .state('packages', {
                url: '/packages',
                templateUrl: '../views/packages.html'
            })
        $urlRouterProvider
            .otherwise('/');
    });