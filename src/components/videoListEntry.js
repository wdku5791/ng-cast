angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    // TODO
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      // console.log('in videoListEntry');
      // console.log($scope);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
