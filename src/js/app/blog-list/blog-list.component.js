'use strict';

angular.module('blogList').
	component('blogList', {
		template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
		controller: function($scope){
			$scope.title = 'Hello there';
			$scope.clicks = 0;
			$scope.someClickTest = function(){
			console.log('Clicked!');
			$scope.clicks += 1;
			$scope.title = "Clicked " + $scope.clicks + " times";
		}
	}
	});

	// controller('BlogListController', function($scope){
	// 	console.log('Hello');
	// 	$scope.title = 'Hello there';
	// 	$scope.clicks = 0;
	// 	$scope.someClickTest = function(){
	// 		console.log('Clicked!');
	// 		$scope.clicks += 1;
	// 		$scope.title = "Clicked " + $scope.clicks + " times";

	// 	}
	// });