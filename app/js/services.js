'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', {
	setup: function() {
		// setup for module name 
	},
	teardown: function() {
		//teardown for module name
	}
}).factory('RollDiceService', function() {

	var service = {
		evaluate: function(input) {
			// rollerModel = new RollerModel();
			evaluate(input);
			// return rollerModel;
		}
	};
	return service;
}).factory('PresetsService', function() {

	var service = {
		getPresets: function() {
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
		},

		savePreset: function(preset, index) {
			localStorage.setItem('preset'+index, preset);
		}
	};
	return service;
})

;