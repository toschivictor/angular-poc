;(function() {
    'use strict';

    const auth = require('../auth/auth.js');

    const getList = function($scope, $http) {
        $scope.shots = [];

        $http.get('https://api.dribbble.com/v1/shots?list&access_token=' + auth.token)
            .then(function(response) {
                $scope.shots = response.data;
            })
            .catch(function(response) {
                console.error(response);
            })
    }

    angular.module('panel')
        .controller('ListController', getList);
})();
