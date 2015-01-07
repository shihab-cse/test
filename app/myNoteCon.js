// JavaScript Document


app.controller("myNoteCon", function($scope) {
    $scope.note = "";
    $scope.left  = function() {return 100 - $scope.note.length;};
    $scope.clear = function() {$scope.note = "";};
    $scope.save  = function() {alert("Note Saved");};
}); 