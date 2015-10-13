var app = angular.module("app", []);

app.controller("ExpresionesController", ["$scope", function($scope)  {
	$scope.fecha = new Date();
}]);