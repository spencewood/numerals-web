require({
    paths: {
        angular: '../../bower_components/angular/angular',
        angularRoute: '../../bower_components/angular-route/angular-route',
        text: '../../bower_components/requirejs-text/text',
        numerals: '../../bower_components/numerals/numerals'
    },
    baseUrl: 'app/js',
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular']
    }
},[
    'angular',
    'app',
    'routes'
], function(angular, app, routes) {
    'use strict';
    
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        $html.addClass('ng-app');
        angular.bootstrap($html, [app['name']]);
    });
});