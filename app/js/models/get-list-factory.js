;(function() {
    'use strict';

    const auth = require('../auth/auth.js');

    const getList = function($http) {
        return {
            data: function() {
                return $http.get('https://api.dribbble.com/v1/shots?list&access_token=' + auth.token);
            }
        };
    };

    angular.module('panel')
        .factory('GetListFactory', getList);
})();
