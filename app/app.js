;(function() {
    'use strict'

    const style   = require('./css/style.less');
    const angular = require('angular');
    const angularRouter = require('angular-route');

    angular.module('panel', ['componentes', 'ngRoute'])
        .config(function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: './app/partials/home.html',
                    controller: 'ListController',
                    controllerAs: 'vm'
                })
                .when('/detalhe/:id', {
                    templateUrl: './app/partials/detail.html',
                    controller: 'DetailController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });

    const home         = require('./js/controllers/list-controller.js');
    const detail       = require('./js/controllers/detail-controller.js');
    const boxComponent = require('./js/components/box-component.js');
})()
