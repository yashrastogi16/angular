'use strict';

angular.module('blogList').
	component('blogList', {
		// template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
		templateUrl: '/templates/blog-list.html',
		controller: function($scope){
			var blogItems = [
			{title: "Title1", id: 1, description: "This is a book"},
			{title: "Title2", id: 2, description: "This is a holybook"},
			{title: "Title3", id: 3, description: "This is a textbook"},
			{title: "Title4", id: 4, description: "This is a notebook"},
			]
			$scope.items = blogItems;
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