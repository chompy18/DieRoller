'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MainCtrl', ['$scope','RollDiceService', function($scope, RollDiceService) {
	$scope.queryString = "";
	$scope.rolls = [];
	$scope.resRolls = [];
	$scope.doRoll = function() {
		rollerModel = RollDiceService.evaluate($scope.queryString);
		$scope.rolls = rollerModel.rolls;
		$scope.resRolls = rollerModel.resRolls;
		$scope.$apply();
	}

  }]);
