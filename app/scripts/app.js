'use strict';

/**
 * @ngdoc overview
 * @name LYS_Public
 * @description
 * # LYS_Public
 *
 * Main module of the application.
 */
angular
  .module('LYS_Public', [
    'angular-parallax',
    'config',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngMaterial'
  ])
  .run(function() {

  })
  .config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise("/");
    //$locationProvider.html5Mode(true);
    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        templateUrl: 'views/app.html',
        controller: 'MainCtrl',
        data: {
          requireLogin: true
        }
      })
      .state('app.Main', {
        url: '/',
        templateUrl: 'views/General/landing.html',
        controller: 'MainCtrl',

      })

  });
