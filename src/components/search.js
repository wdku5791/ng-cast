angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      result: '<',
      service: '<'
      // searches: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      // console.log('in videoListEntry');
      this.handleClick = (query) => {
        this.service.search(query, this.result);
      };
      // console.log($scope);

    },
    templateUrl: 'src/templates/search.html'
  };
});
