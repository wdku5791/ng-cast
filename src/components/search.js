angular.module('video-player')
.controller('SearchController', function() {
  this.handleClick = (query) => {
    this.service.search(query, this.result);
  };
})
.directive('search', function() {
  return {
    scope: {
      result: '<',
      service: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'SearchController',
    templateUrl: 'src/templates/search.html'
  };
});
