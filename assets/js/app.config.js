'use strict';

angular.
  module('feedApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<feed></feed>'
        }).
        otherwise('/');
    }
  ]);