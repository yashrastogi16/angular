'use strict';

angular.module('try').
	config(
		function(
			$locationProvider,
			$routeProvider)
		{
			$locationProvider.html5Mode({
				enabled: true
			})
			$routeProvider.
			when("/",{
				template: "<blog-list></blog-list>"
			}).
			when("/blog/:id",{
				template: "<blog-detail></blog-detail>"
			}).
			// when("/blog/2",{
			// 	template: "<blog-list></blog-list>"
			// }).
			otherwise({
				template: "Not Found"
			})
		});