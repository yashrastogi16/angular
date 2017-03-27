'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		// template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
		templateUrl: '/templates/blog-detail.html',
		controller: function($location, $routeParams, $scope){
			var blogItems = [
			{title: "Title1", id: 1, description: "This is a book"},
			{title: "Title2", id: 2, description: "This is a holybook"},
			{title: "Title3", id: 3, description: "This is a textbook"},
			{title: "Title4", id: 4, description: "This is a notebook"},
			]
			//console.log($routeParams)
			$scope.title = "Blog " + $routeParams.id
			$scope.notFound = true
			angular.forEach(blogItems, function(post){
				if(post.id == $routeParams.id){
					$scope.notFound = false
					$scope.post = post
				}
			})
			if($scope.notFound){
				console.log('Not found')
				location.path("/404")
			}
			
		}
});

