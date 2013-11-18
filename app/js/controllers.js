'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('MainCtrl', [
	  	'$scope',
	  	'RollDiceService', 
	  	function($scope, RollDiceService) {
			$scope.queryString = "";
			$scope.rolls = [];
			$scope.resRolls = [];
			$scope.inputFocus = true;
			$scope.grandTotal = 0;
			$scope.editMode = false;

			$scope.doRoll = function() {
				rollerModel = RollDiceService.evaluate($scope.queryString);
				$scope.rolls = rollerModel.rolls;
				$scope.resRolls = rollerModel.resRolls;
				$scope.grandTotal = rollerModel.grandTotal;
				$scope.$apply();
				$('#rollInput').focus();
			}

			$scope.getPresets = function() {
				var presets = [];
				var preset;

				for (var i = 0; i < 20; i++) {
					preset = localStorage.getItem('preset'+i);
					if (preset === null) {
						preset = (i+1)+"d6";
					}
					presets.push(preset);
				}

				return presets;
			}

			$scope.handlePreset = function() {
				$scope.queryString = this.preset;
				$scope.doRoll();
			}

			$scope.savePreset = function(item, index) {
				localStorage.setItem('preset'+index, item);
			}
		}
	]);
