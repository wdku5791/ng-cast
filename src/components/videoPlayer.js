angular.module('video-player')
.controller('VideoPlayerController', function() {

})
.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'VideoPlayerController',
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
