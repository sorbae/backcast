var Videos = Backbone.Collection.extend({
  model: Video,
  
  search: function(query) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        q: 'banana man jack',
        key: 'AIzaSyA8_E2B8PY3Dku7bNyex6zxpcfLLDVjeD0',
        maxResults: '5',
        part: 'snippet'
      },
      success: function(data) {
        console.log('success', data);
      },
      error: function(data) {
        console.log('YA DONE, SON', data);
      }
      
    });
  }
});
