'use strict';

/**
 * @ngdoc function
 * @name lysAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lysAdminApp
 */
angular.module('LYS_Public')
  .controller('MainCtrl', function ($scope, Data,$mdBottomSheet) {
    $scope.Data = Data.data;
    Data.getTestimonials();
    $scope.showListBottomSheet = function() {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'views/Partials/Mobile/bottom_sheet.html',
      controller: 'MainCtrl'
    }).then(function(clickedItem) {
      //$scope.alert = clickedItem['name'] + ' clicked!';
    });
  };
  });
