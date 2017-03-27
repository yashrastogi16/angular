'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		// template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
		templateUrl: '/templates/blog-detail.html',
		controller: function(Post, $http, $location, $routeParams, $scope){

			Post.query(function(data){
				$scope.notFound = true
				angular.forEach(data, function(post){
				if(post.id == $routeParams.id){
					$scope.notFound = false
					$scope.post = post
				}
			})
			})

			if($scope.notFound){
				console.log('Not found')
				location.path("/404")
			}
			
		}
});

