;(function() {
    'use strict';

    const auth = require('../auth/auth.js');

    const getDetail = function($http, $routeParams) {
        return {
            data: function() {
                return $http.get('https://api.dribbble.com/v1/shots/' + $routeParams.id + '?access_token=' + auth.token);
            }
        };
    };

    angular.module('panel')
        .factory('GetDetailFactory', getDetail);
})();
