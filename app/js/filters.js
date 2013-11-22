define(['angular', 'services'], function (angular, services) {
	'use strict';

	/* Filters */
  
	angular.module('numeralsWeb.filters', ['numeralsWeb.services'])
		.filter('interpolate', ['version', function(version) {
			return function(text) {
				return String(text).replace(/\%VERSION\%/mg, version);
			};
	}]);
});
