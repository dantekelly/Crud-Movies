(function() {
  var app = angular.module('recent', []);
  
  app.directive('ngRecent', function() {
    return {
      restrict: 'AE',
      templateUrl: 'scripts/app/views/movies.html',
      controller: function($scope) {
        $scope.rentMovie = function() {
          console.log('User wants to rent a movie!');
        };
      },
      controllerAs: 'movies'
    }
  })
})();