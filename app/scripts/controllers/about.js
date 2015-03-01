'use strict';

/**
 * @ngdoc function
 * @name hucksterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hucksterApp
 */
angular.module('hucksterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
