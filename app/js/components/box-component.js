;(function() {
    'use strict'

    angular.module('componentes', []).component('box', {
        bindings: {
            id: '@',
            title: '@',
            image: '@'
        },
        template: '<div class="large-4 medium-4 columns callout"><a href="/detalhe/{{$ctrl.id}}" title="{{$ctrl.title}}"><img src="{{$ctrl.image}}" alt="{{$ctrl.title}}"></a></div>'
    })
})()
