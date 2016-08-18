myApp.controller('homeController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location) {
    $scope.friends = []
    var index = function() {
        friendsFactory.index(function(returnedData) {
            $scope.friends = returnedData;
        });
    };
    index();
    $scope.delete = function(id) {
        friendsFactory.delete(id, function(returnedData) {
            $scope.friends = returnedData
        })
    }

}]);
