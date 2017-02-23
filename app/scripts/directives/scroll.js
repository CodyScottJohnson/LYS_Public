'use strict';

/**
 * @ngdoc directive
 * @name LYS_Public.directive:scroll
 * @description
 * # scroll
 */
angular.module('LYS_Public')
.directive('scroll', function($window, $document) {
  return function(scope, element, attrs) {
    var y = attrs.scrolly;
    angular.element(element).bind("scroll", function() {
      scope.pageYOffset = this.scrollTop;
      scope.$apply();
    });
  };
  });
