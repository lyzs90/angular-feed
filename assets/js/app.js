'use strict';

const feedApp = angular.module('feedApp', ['ngResource', 'angularMoment', 'ngAnimate']);

feedApp.controller('FeedCtrl', ['$scope', '$resource', '$timeout', ($scope, $resource, $timeout) => {
  $scope.feedEntries = $resource('/feed').query();

  io.socket.get('/feed/subscribe', (data, jwr) => {
    io.socket.on('new_entry', (entry) => {
      $timeout(() => {
        $scope.feedEntries.unshift(entry);
      });
    });
  });
}]);