define(['angular', 'services'], function(angular, services) {
	'use strict';

  /* Directives */

	angular.module('numeralsWeb.directives', ['numeralsWeb.services'])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}]);
});
