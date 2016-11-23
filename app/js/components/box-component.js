;(function() {
    'use strict'

    angular.module('componentes', []).component('box', {
        bindings: {
            id: '@',
            title: '@',
            image: '@'
        },
        templateUrl: './app/js/components/box.html'
    })
})();
