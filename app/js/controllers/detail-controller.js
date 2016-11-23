;(function() {
    'use strict'

    const auth = require('../auth/auth.js')

    const getDetail = function($scope, $http, $routeParams, $sce) {
        $scope.shot        = [];
        $scope.description = [];
        $scope.image       = [];

        $http.get('https://api.dribbble.com/v1/shots/' + $routeParams.id + '?access_token=' + auth.token)
            .success(function(response) {
                $scope.shot        = response
                $scope.description = response.description
                $scope.image       = response.images

                //function to trust the 'dangerous' value (html return)
                $scope.parseHtmlReturn = function() {
                    return $sce.trustAsHtml($scope.description);
                };
            })
            .error(function(response) {
                console.error(response)
            })
    }

    // function onSuc(response) {
    //     $scope.shot        = response
    //     $scope.description = response.description
    //     $scope.image       = response.images
    //
    //     //function to trust the 'dangerous' value (html return)
    //     $scope.parseHtmlReturn = function() {
    //         return $sce.trustAsHtml($scope.description);
    //     };
    // }

    angular.module('panel')
        .controller('DetailController', getDetail)
})()
