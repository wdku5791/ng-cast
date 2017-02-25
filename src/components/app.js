angular.module('video-player')
.controller('MyController', function($scope, $window) {
  // $scope.selectVideo = function () {return 'asdf'};
  $scope.videos = $window.exampleVideoData;
  // console.log($scope);
})
.directive('app', function() {
  return {
    // TODO
    // controller: function() {

    // }
    // scope: {
    //   ctrl: 'hi'
    // }
    // scope: {
    //   // ctrl: '<',
    //   // selectVideo: '<',
    //   videos: '<',
    // },
    // controllerAs: 'ctrl',
    // bindToController: true,
    controller: function($scope) {
      // $scope.ctrl.selectVideo = function() {return 'bbb'};
      // console.log('child?');
      console.log($scope);
    },
    templateUrl: 'src/templates/app.html'
  };
});
