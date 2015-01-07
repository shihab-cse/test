// JavaScript Document

app.controller("myCon", function($scope){
	$scope.note = "";
	$scope.left  = function() { return 100- $scope.note.length; };
	$scope.clear = function() { $scope.note = ""; };
	$scope.save = function() { alert("save done"); };
	
});