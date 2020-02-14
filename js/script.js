console.log('geonet');

$(document).ready(function(){
	// accessing key from json file
	var myKey = JSON.parse(apiKey);
	console.log(myKey[0]);
	myKey = myKey[0].key;
	console.log(myKey);



  //
	// $.ajax({
	//   url : `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${myKey}`,
	// 	type :'GET',
	// 	data :'json',
	// 	success:function(data){
	// 		console.log(data);
  //     // console.log(data.photos[0].img_src);
  //     var i;
  //     for (i = 0; i < data.photos.length; i++) {
  //
  //     document.getElementById('result').innerHTML +=
  //     '<div class="col col-sm-6 col-md-3 col-lg-3">' +
  //     '<img class="img-thumbnail w-50" src="' + data.photos[i].img_src + '"></img>' +
  //     '<p>ID: ' + data.photos[i].id + '</p>' +
  //     '<p>Date: ' + data.photos[i].earth_date + '</p>' +
  //     '</div>'
  //     // for (i = 0; i < data.features.length; i++) {
  //     //   for (j = 0; j < data.features[i].geometry.coordinates.length; j++) {
  //     //     console.log(data.features[i].geometry.coordinates);
  //     //   }
  //     // }
  //     }
  //   },
  //   error:function(){
	// 	console.log('error');
	// 	}
  //
	// });//ajax



  	$.ajax({
  	  url : `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${myKey}`,
  		type :'GET',
  		data :'json',
  		success:function(data){
  			console.log(data);
        // console.log(data.photos[0].img_src);
        var i;
        for (i = 0; i < data.photos.length; i++) {

        // for (i = 0; i < data.features.length; i++) {
        //   for (j = 0; j < data.features[i].geometry.coordinates.length; j++) {
        //     console.log(data.features[i].geometry.coordinates);
        //   }
        // }
        }
      },
      error:function(){
  		console.log('error');
  		}

  	});//ajax

}); //document ready
