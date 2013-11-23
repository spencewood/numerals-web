define(function(require){
	'use strict';

    var angular = require('angular');
    var numeralsService = require('services/numerals-service');
	
    /* Services */

	angular.module('numeralsWeb.services', [])
		.factory('numeralsService', function(){
            return numeralsService;
        })
        .value('version', '0.1');
});
