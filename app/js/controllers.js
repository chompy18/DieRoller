'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MainCtrl', ['$scope','RollDiceService', function($scope, RollDiceService) {
	$scope.queryString = "";
	$scope.rollerModel = {};
	$scope.doRoll = function() {
		$scope.rollerModel = RollDiceService.evaluate($scope.queryString);
	}
  }]);
