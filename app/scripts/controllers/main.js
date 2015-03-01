'use strict';

/**
 * @ngdoc function
 * @name hucksterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hucksterApp
 */
angular.module('hucksterApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
