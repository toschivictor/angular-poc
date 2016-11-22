;(function() {
    'use strict'

    const auth = require('../auth/auth.js')

    const getDetail = function($scope, $http, $routeParams) {
        $scope.shot = []
        $scope.image = []

        $http.get('https://api.dribbble.com/v1/shots/' + $routeParams.id + '?access_token=' + auth.token)
            .success(function(response) {
                $scope.shot = response.data
                $scope.image = response.data.images
            })
            .error(function(response) {
                console.error(response)
            })
    }

    angular.module('panel')
        .controller('DetailController', getDetail)
})()
