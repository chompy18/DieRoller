'use strict';

/* Controllers */

/*angular.module('dieRoller.controllers', ['RollDiceService']).
  controller('MainCtrl', [function($scope, RollDiceService) {
	$scope.queryString = "";
	$scope.rollerModel = {};
	$scope.doRoll = function() {
		$scope.rollerModel = RollDiceService.evaluate($scope.queryString);
	}
  }]);*/

function MainCtrl($scope, RollDiceService) {
	$scope.queryString = "";
	$scope.rollerModel = {};
	$scope.doRoll = function() {
		$scope.rollerModel = RollDiceService.evaluate($scope.queryString);
	}
}