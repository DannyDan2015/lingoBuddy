'use strict';

angular.module('lbApp')
  .controller('MainCtrl', [
        "$scope", 'lbModel', 'userModel', '$timeout',
        function ($scope, lbModel, userModel, $timeout) {

            $scope.sideMenuHidden = true;
            $scope.lbModel = lbModel;
            $scope.user = userModel;


            $scope.homeProfileExpanded = false;

            $scope.expandCollapseDelay = function () {
                if ($scope.homeProfileExpanded == true) {
                    $timeout(function() {
                        $scope.homeProfileExpanded = false;
                    }, 500);
                } else {
                    $scope.homeProfileExpanded = true;
                }
            };
            $scope.sideMenuDelay = function () {
                $scope.sideMenuHidden = !$scope.sideMenuHidden;

                if ($scope.sideMenuHidden ) {
                    $timeout(function() {
                        $scope.sideMenuHiddenIcon = false;
                    }, 200);
                } else {
                    $scope.sideMenuHiddenIcon = true;
                }
            };

  }]);
