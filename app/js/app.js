define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	'angularRoute',
	], function (angular, filters, services, directives, controllers) {
		'use strict';

		// Declare app level module which depends on filters, and services
		
		return angular.module('numeralsWeb', [
			'ngRoute',
			'numeralsWeb.controllers',
			'numeralsWeb.filters',
			'numeralsWeb.services',
			'numeralsWeb.directives'
		]);
});
