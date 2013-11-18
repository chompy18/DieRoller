'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
  })
  .directive('results', function(){
  	// Runs during compile
	return {
		scope: {
			rolls: "=data"
		},
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl:"partials/components/results.html"
	};

  })
  .directive('totals', function(){
  	// Runs during compile
	return {
		// scope: {
		// 	totals: "=data"
		// },
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl:"partials/components/totals.html"
	};

  })
;
