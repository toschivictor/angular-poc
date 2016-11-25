;(function() {
    'use strict';

    function onSuccess($scope, $sce, response) {
        $scope.shot        = response;
        $scope.description = response.description;
        $scope.image       = response.images;

        //function to trust the 'dangerous' value (html return)
        $scope.parseHtmlReturn = function() {
            return $sce.trustAsHtml($scope.description);
        };
    };

    const getDetail = function($scope, $sce, GetDetailFactory) {
        $scope.shot        = [];
        $scope.description = [];
        $scope.image       = [];

        GetDetailFactory.data()
            .success(function(response) {
                onSuccess($scope, $sce, response);
            })
            .error(function(response) {
                console.error(response);
            });
    }

    angular.module('panel')
        .controller('DetailController', getDetail);
})();
