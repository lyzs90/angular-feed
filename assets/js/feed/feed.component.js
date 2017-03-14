'use strict';

angular.
  module('feed').
  component('feed', {
    templateUrl: 'js/feed/feed.template.html',
    controller: ['$resource', '$timeout', function feedController($resource, $timeout) {
      this.feedEntries = $resource('/feed').query();

      io.socket.get('/feed/subscribe', (data, jwr) => {
        io.socket.on('new_entry', (entry) => {
          $timeout(() => {
            this.feedEntries.unshift(entry);
          });
        });
      });
    }
  ]
});