define(function(require){
    'use strict';

    var angular = require('angular');
    var services = require('services');
    var numeralsController = require('controllers/numerals-controller');

    /* Controllers */
    
    return angular.module('numeralsWeb.controllers', ['numeralsWeb.services'])
        .controller('numeralsController', numeralsController);
});