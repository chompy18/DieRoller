'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('MainCtrl', [
	  	'$scope',
	  	'RollDiceService', 
	  	'PresetsService',
	  	function($scope, RollDiceService, PresetsService) {
			$scope.queryString = "";
			$scope.rolls = [];
			$scope.resRolls = [];
			$scope.inputFocus = true;
			$scope.grandTotal = 0;
			$scope.editMode = false;
			$scope.repeat = 1;

			$scope.doRoll = function() {
				rollerModel = new RollerModel();
				$scope.grandTotal = 0;

				for (var i = 0; i < $scope.repeat; i++) {
					RollDiceService.evaluate($scope.queryString);
					if (i+1 !== Number($scope.repeat)) {
						rollerModel.rolls.push("------------------\n");
                    	rollerModel.resRolls.push("------------------\n");
                	}
                    $scope.grandTotal += rollerModel.grandTotal;
				}
				$scope.rolls = rollerModel.rolls;
				$scope.resRolls = rollerModel.resRolls;
				// $scope.grandTotal = rollerModel.grandTotal;
				$scope.$apply();
				$('#rollInput').focus();
			}

			$scope.getPresets = function() {
				return PresetsService.getPresets();
			}

			$scope.handlePreset = function() {
				$scope.queryString = this.preset;
				$scope.doRoll();
			}

			$scope.savePreset = function(item, index) {
				PresetsService.savePreset(item, index);
			}
		}
	]);
