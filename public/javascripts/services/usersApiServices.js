var api = angular.module('usersApiFactory', []);

api.factory('usersApi', ['$http', function ($http) {

  var baseUrl = '/api/users/';

  var usersInterface = {};

  usersInterface.getAll = function () {
    return $http.get(baseUrl);
  }

  usersInterface.addUser = function (newUser) {
    var payload = { user: newUser };
    return $http.post(baseUrl, payload);
  }

  usersInterface.delete = function (id) {
    return $http.delete (baseUrl + id);
  }

  return usersInterface;

}]);
