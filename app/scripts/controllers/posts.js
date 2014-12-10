'use strict';

app.controller('PostCtrl', function ($scope, $location, Post, Auth) {
	$scope.posts = Post.all;
	$scope.user = Auth.user;

	$scope.post = {url: 'http://'};

	

	$scope.deletePost = function (post) {
		Post.delete(post);
	};
});