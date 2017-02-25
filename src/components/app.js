angular.module('video-player')
// .controller('MyController', function($scope) {
//   // $scope.selectVideo = function () {return 'asdf'};
//   // $scope.videos = exampleVideoData;
//   // $scope.currentVideo = exampleVideoData[0];
//   // console.log('.controller scope');
//        $scope.videos = exampleVideoData;
//        $scope.currentVideo = exampleVideoData[0];
//   console.log($scope);
// })
.directive('app', function() {
  return {
    scope: {
      // selectVideo: '<',
      // videos: '<',
      // currentVideo: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope, youTube) {
      // console.log($http);
      // $scope.ctrl.selectVideo = function() {return 'bbb'};
      // console.log('child?');
      this.videos = exampleVideoData;
      // console.log(this);
      this.currentVideo = exampleVideoData[0];

      this.selectVideo = function(index) {
        // console.log(video);
        this.currentVideo = this.videos[index];
      }.bind(this);

      this.searchResults = function() {

      };

      youTube.search('cat', function(videoData) {
        this.videos = videoData;
        this.currentVideo = videoData[0];
      }.bind(this));
      // console.log($scope);
    },
    templateUrl: 'src/templates/app.html'
  };
});
