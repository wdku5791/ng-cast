angular.module('video-player')
.controller('VideoListEntryController', function() {

})
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      onClick: '<',
      index: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'VideoListEntryController',
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
