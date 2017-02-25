angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function(str, callback) {
    // callback(videoData);
    // console.log(window.YOUTUBE_API_KEY);

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
      console.log(response);
        // this callback will be called asynchronously

      callback(response.data.items);
        // when the response is available
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
  };
});
