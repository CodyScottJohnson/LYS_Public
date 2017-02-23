'use strict';

/**
 * @ngdoc directive
 * @name LYS_Public.directive:sticky
 * @description
 * # sticky
 */
angular.module('LYS_Public')
.directive('sticky', function($window, $document) {
  return function(scope, element, attrs) {
    var parentID = attrs.parentid;
    var parent = $document[0].getElementById(parentID);
    var stuck = false;
    var top = 0;
    angular.element(parent).bind("scroll", function() {
      var currentElem =angular.element(element)[0];
      var distance = currentElem.offsetTop - this.scrollTop;
      if (distance <= 3 && stuck===false) {
          stuck = true;
          top = currentElem.offsetTop;
          scope.boolChangeClass = true;
        } else if(stuck===true && top-this.scrollTop > 3){
          stuck=false;
          scope.boolChangeClass = false;
          scope.AutoScroll = true;
          //console.log(element);
        }
        scope.pageYOffset = this.pageYOffset;
      scope.$apply();
    });
  };
  });
