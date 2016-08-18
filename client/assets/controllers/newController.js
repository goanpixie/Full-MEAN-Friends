myApp.controller('newController', ['$scope', 'friendsFactory', function($scope, friendsFactory) {
    var vm = this;
    /*
      THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
      WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
    */
    var index = function() {
        friendsFactory.index(function(returnedData) {
            $scope.friends = returnedData;
            console.log($scope.friends);
        });
    };
    index();
    /*
      OUR $scope.create function goes here <-- $scope because we need to access this method 
      with ng-submit or ng-click (from the form in the previous assignment).  
      Want to all of the friends when we get back?  We can re-run index.
    */

    this.create = function() {
        console.log(vm);
        var newFriend = {
          firstName: vm.firstName,
          lastName: vm.lastName,
          birthDate: vm.birthDate
        }
        friendsFactory.create(newFriend, function (result) {
          console.log(result);
        })
    }

}]);
