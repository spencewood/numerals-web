define([], function(){
    return function($scope, $http, numeralsService){
        $scope.numeral = '';
        $scope.number = '';

        $scope.$watch('numeral', function(val){
            $scope.number = numeralsService.getNumber(val.trim());
        });

        $scope.$watch('number', function(val){
            $scope.numeral = numeralsService.getNumeral(val);
        });

        $scope.increase = function(amount){
            $scope.number += amount;
        };

        $scope.decrease = function(amount){
            $scope.number -= amount;
        };

        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    };
});