define(function(require){
    return function($scope, $http, numeralsService){

        console.log('here');
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
    };
});