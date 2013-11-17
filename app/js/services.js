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
			rollerModel = new RollerModel();
			evaluate(input);
			return rollerModel;
		}
	};
	return service;
})

;