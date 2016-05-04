(function() {
  var app = angular.module('pagination', []);
  
  app.directive('ngPagination', function() {
    return {
      restrict: 'AE',
      templateUrl: 'scripts/app/views/pagination.html',
      controller: function() {
        
      },
      controllerAs: ''
    }
  })
})();