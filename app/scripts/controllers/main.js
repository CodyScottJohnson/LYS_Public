'use strict';

/**
 * @ngdoc function
 * @name lysAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lysAdminApp
 */
angular.module('LYS_Public')
  .controller('MainCtrl', function($scope, Data, $mdBottomSheet) {
    $scope.Data = Data.data;
    $scope.SheetOpen = false;
    Data.getTestimonials();
    $scope.showListBottomSheet = function() {
      if ($scope.SheetOpen) {
        $scope.SheetOpen = !$scope.SheetOpen;

        $mdBottomSheet.cancel()

      }
      else if (!$scope.SheetOpen) {
        $scope.SheetOpen = !$scope.SheetOpen;
        $scope.sheet = $mdBottomSheet.show({
          templateUrl: 'views/Partials/Mobile/bottom_sheet.html',
          controller: 'MainCtrl'
        }).then(function(clickedItem) {
          //$scope.alert = clickedItem['name'] + ' clicked!';
        }, function() {});

      }
    };
  });
