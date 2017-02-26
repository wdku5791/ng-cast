angular.module('video-player')
.service('youTube', function($http) {

  this.search = function(str, callback) {

    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: str,
        maxResults: 5,
        videoEmbeddable: 'true',
        type: 'video'
      }
    }).then(function successCallback(response) {
      callback(response.data.items);
    }, function errorCallback(response) {
    });
  };
});
