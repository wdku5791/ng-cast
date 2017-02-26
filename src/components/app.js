angular.module('video-player')
.controller('AppController', function(youTube) {

  this.selectVideo = function(index) {
    this.currentVideo = this.videos[index];
  }.bind(this);

  this.searchResults = (results) => {
    this.videos = results;
    this.currentVideo = results[0];
  };

  this.searchService = youTube;
  youTube.search('cats', this.searchResults);
})
.directive('app', function() {
  return {
    scope: {
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'AppController',
    templateUrl: 'src/templates/app.html'
  };
});
