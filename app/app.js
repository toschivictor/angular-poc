;(function() {
    'use strict'

    const style   = require('./css/style.less')
    const angular = require('angular')

    angular.module('panel', ['componentes'])

    require('./js/controllers/list-controller.js')
    require('./js/components/box-component.js')
})()
