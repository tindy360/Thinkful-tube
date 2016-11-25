function getResults(query) {
    $.getJSON("https://www.googleapis.com/youtube/v3/search", {
            "part": "snippet",
            "key": "AIzaSyAgwnaHjS5mnLPI_AM9sZVlHiPQsQOjtbk",
            "q": query
        },
        function(data) {
            if (data.pageInfo.totalResults == 0) {
                alert("No results found, try another search");
            }
            // If there are no results it will just empty the list
            renderResults(data.items);
        }

    );
}
//remder function
function renderResults(videos) {
    var html = "";
    $.each(videos, function(index, video) {
        // add HTML to results section
        console.log(video.snippet.thumbnails.medium.url);
        html = html + "<li><p>" + video.snippet.title +
            "</p><img src='" + video.snippet.thumbnails.high.url + "'/></li>";

    });
    $("#results ul").html(html);
};
// event listener
 $("#searchQuery").on("submit", function(event) {
    event.preventDefault();
    var query = $(this).find('.searchForm').val();
    getData(query, youTubeUrl);
    console.log(getData)
});
