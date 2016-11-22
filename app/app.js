;(function() {
    'use strict'

    const style   = require('./css/style.less')
    const angular = require('angular')
    const angularRouter = require('angular-route')

    angular.module('panel', ['componentes', 'ngRoute'])
        .config(function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: './app/partials/home.html',
                    controller: 'ListController'
                })
                .when('/detalhes/:id', {
                    templateUrl: './app/partials/detail.html',
                    controller: 'DetailController'
                })
                .otherwise({
                    redirectTo: '/'
                })
        })

    require('./js/controllers/list-controller.js')
    require('./js/controllers/detail-controller.js')
    require('./js/components/box-component.js')
    require('./js/components/box-component.js')
})()
