(function() {
  var app = angular.module('top', []);

  app.directive('ngToprated', function() {
    return {
      restrict: 'AE',
      templateUrl: 'scripts/app/views/movies.html',
      controller: function($http,$scope) {
        $scope.check = 'I am alive!';
        $http({
          method: 'GET',
          url: 'scripts/api/popular.json'
        }).then(function successCallback(response) {
          $scope.movies = response.data.results;
          console.log(response.data.results);
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
        $scope.rentMovie = function() {
          console.log('User wants to rent a movie!');
        };



      },
      controllerAs: 'movies'
    }
  })
})();