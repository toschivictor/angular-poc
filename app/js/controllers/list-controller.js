;(function() {
    'use strict';

    const getList = function($scope, $sce, GetListFactory) {
        $scope.shots = [];

        GetListFactory.data()
            .success(function(response) {
                $scope.shots = response;
            })
            .error(function(response) {
                console.error(response);
            });
    };

    angular.module('panel')
        .controller('ListController', getList);
})();
