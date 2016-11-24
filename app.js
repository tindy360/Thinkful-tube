//declar the endpoint
var youTubeUrl = 'https://www.googleapis.com/youtube/v3/search'
// API fu
function getData(searchTerm, callback) {
    var settings = {
        url: youTubeUrl,
        data: {
            key: AIzaSyAgwnaHjS5mnLPI_AM9sZVlHiPQsQOjtbk,
            q: searchTerm,
            part: 'snippet',
        },
        dataType: 'json',
        type: 'GET'
        success: callback
    };
    $.ajax(settings);
};

// display the data that the user searches for



// Listiner for submit and triger for above functions

function formSubmit() {
  $('#query').submit(function(event){
  event.preventDefault();
  var query = $(this).find('.searchForm').val();
  getData(query,youTubeUrl);
  console.log(getData)
  });
}
