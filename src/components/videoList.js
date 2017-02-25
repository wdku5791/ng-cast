angular.module('video-player')
// .controller('VideoListController', function($scope) {
//   // $scope.selectVideo = function () {return 'asdf'};
//   // console.log($scope);
// })
.directive('videoList', function() {
  return {
    // TODO
    scope: {
      videos: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {

      // console.log('in videoList');
      // console.log($scope);
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
