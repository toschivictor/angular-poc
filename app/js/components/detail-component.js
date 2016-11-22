;(function() {
    'use strict'

    angular.module('componentes', []).component('detail', {
        bindings: {
            id: '@',
            title: '@',
            image: '@'
        },
        templateUrl: './app/js/components/box.html'
    })
})()
