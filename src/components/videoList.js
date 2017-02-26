angular.module('video-player')
.controller('VideoListController', function() {
})
.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'VideoListController',
    templateUrl: 'src/templates/videoList.html'
  };
});
