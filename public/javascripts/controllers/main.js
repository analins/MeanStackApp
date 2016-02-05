var main = angular.module('MainController', []);

main.controller('main', ['$scope', 'usersApi', function ($scope, usersApi) {

  $scope.users = [];

  $scope.newUser = {
    username: null,
    comment: null
  }

  $scope.masterUser = angular.copy($scope.newUser);

  $scope.updateUsers = function () {
    usersApi.getAll().then(function (response) {
      $scope.users = response.data.users;
    });
  }

  $scope.addUser = function () {
    usersApi.addUser($scope.newUser).then(function () {
      $scope.updateUsers();
      $scope.newUser = angular.copy($scope.masterUser);
    });
  }

  $scope.delete = function (id) {
    usersApi.delete(id).then(function () {
      $scope.updateUsers();
    });
  }


    $scope.updateUsers();

}]);
