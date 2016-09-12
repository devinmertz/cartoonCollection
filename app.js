var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "CartoonService", function($scope, CartoonService) {
	
	$scope.cartoons = CartoonService.cartoons;
	
	$scope.newCartoon = "";
	
	
	$scope.addCartoon = function () {
		CartoonService.addCartoon($scope.newCartoon);
		$scope.newCartoon="";
	
	
	
}}]);