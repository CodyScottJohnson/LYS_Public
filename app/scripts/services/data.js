'use strict';

/**
 * @ngdoc service
 * @name LYS_Public.Data
 * @description
 * # Data
 * Factory in the LYS_Public.
 */
angular.module('LYS_Public')
  .factory('Data', function ($http, $q, ENV) {
    var Data = {data:{}};
    Data.getTestimonials = function(){
      var deferred = $q.defer();
      $http({
            method: 'GET',
            url: ENV.API + 'Testimonials'

        }).then(function(data) {
           Data.data.Testimonials = data.data;
            deferred.resolve(data.data);
        }, function(error) {
            deferred.reject(error);
        });
    return deferred.promise;
    }

    return Data;
  });
