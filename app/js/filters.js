define(function(require){
	'use strict';

    var angular = require('angular');
    var services = require('services');

	/* Filters */
  
	angular.module('numeralsweb.filters', ['numeralsweb.services'])
		.filter('interpolate', ['version', function(version) {
			return function(text) {
				return String(text).replace(/\%VERSION\%/mg, version);
			};
	}]);
});
