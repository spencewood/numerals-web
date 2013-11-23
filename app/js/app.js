define(function(require){
    'use strict';

    var angular = require('angular');
    var filters = require('filters');
    var services = require('services');
    var directives = require('directives');
    var controllers = require('controllers');
    var angularRoute = require('angularRoute');

    // Declare app level module which depends on filters, and services
    
    return angular.module('numeralsweb', [
        'ngRoute',
        'numeralsweb.controllers',
        //'numeralsweb.filters',
        'numeralsweb.services'
        //'numeralsweb.directives'
    ]);
});
