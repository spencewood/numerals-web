define(function(require){
	'use strict';

    var angular = require('angular');
    var numeralsService = require('services/numerals-service');
	
  /* Services */

  // Demonstrate how to register services
  // In this case it is a simple value service.
	angular.module('numeralsWeb.services', [])
		.factory('numeralsService', function(){
            return numeralsService;
        })
        .value('version', '0.1');
});
