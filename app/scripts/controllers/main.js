'use strict';

/**
 * @ngdoc function
 * @name lysAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lysAdminApp
 */
angular.module('LYS_Public')
  .controller('MainCtrl', function ($scope, Data) {
    $scope.Data = Data.data;
    Data.getTestimonials();
  });
