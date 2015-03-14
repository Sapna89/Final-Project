//6.  Retrieve and parse out at least eight images from the Flickr API

//  var url1 = 'http://api.flickr.com/services/feeds/photos_public.gne?';
//  var key = 'api_key=[0e4fd0f469745ff1986e78e99b3e291a]';
//  var url2 = '&format=json&jsoncallback'; 
//  //var flickrKey = "0e4fd0f469745ff1986e78e99b3e291a";

// //var test = 'http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=[0e4fd0f469745ff1986e78e99b3e291a]&user_id=[130951836@N02]&format=json&per_page=10'
// //var test1 = 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=c13437666badf5467f4c73fc2a80f97c&user_id=130951836%40N02&format=json&nojsoncallback=1&api_sig=7d0bd91fb311da47a766a4ed872f185e';

var url = "http://api.flickr.com/services/feeds/photos_public.gne?";
var endUrl = "&format=json&jsoncallback=?";

$('input').on('keyup', function (evt) {
	if(evt.keyCode === 13){
		console.log("enter key is pressed");
		getPictures($(this).val());
	}
});

function getPictures(query) {
	console.log(query);
	//var q = query;
	var pageLimit = 30;
	

	
	$.ajax({
		url: url + 'tags=' + query + endUrl,
		type: 'GET',
		dataType: 'jsonp'
	}).done(function(response) {
		console.log(response);

		var results = response.items;
		
		$('#results').empty();
		$.each(results, function(i, item){
			if(i<10)
			{
				var html = $("<img/>").attr("src", item.media.m.replace('_m', '_s')).appendTo("#results").wrap("<a href='" + item.media.m.replace('_m', '_z') + "' name='"+ item.link + "' title='" +  item.title +"'></a>");
			}
			
			//$('#results').append(html);
		});
	});
}

//6. Implement a jQueryUI widget of your choice

$(function(){

	$('#accordion').accordion();
	
});



// function render(photo) {
// 	console.log(photo);
// 	var results = $('#results');
// 	console.log(results);
// 	//results.empty();
// 	for(var i = 0; i < photo.length; i++){
// 		results.append(createPicturesHTML(pictures[i]));
// 	}
// }

// function createPicturesHTML(pictures) {
// 	var picturesString = '<div class="pictures">' +
// 					'<div class="sub-menu-background"></div>' +
// 					'<div class="sub-menu">' +
// 						//'<div class="title">' + pictures.title + '</div>' +
// 						// '<div class="rating">Rated: ' + pictures.mpaa_rating + '</div>' +
// 						// '<div class="critics">' + pictures.ratings.critics_score + '%</div>' +
// 					'</div>' +
// 				'</div>';

// 	var picturesEl = $(picturesString);
// 	// picturesEl.css({
// 	// 	backgroundImage: 'url(' + pictures.posters.detailed.replace('tmb','ori') + ')'
// 	// });

// 	return picturesEl;
// }




// var url = "http://api.flickr.com/services/feeds/photos_public.gne?id=130951836%40N02&format=json&jsoncallback=?&tags=vectacorpbuilding";

// $.getJSON(url, function(data){
// 	var html = "";

// 	$.each(data.item, function(i, item){
// 		html += "<a href=" +item.media.m + "title=" + item.title + "rel=lightbox[vecta]>";
// 		html += "<img src=" + item.media.m + "width=120 height=100";
// 		html += "</a>";
// 	});
// 	$("#results").html(html);
// });