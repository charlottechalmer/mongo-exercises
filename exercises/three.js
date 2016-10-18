/*jshint esversion:6*/
module.exports = function(mongoose, Checkout, Movie) {
	//What is the title of the movie(s) that was the most checked out?
	Checkout.find({}, (err, data) => {
		var counts = []; 
		var maxcount = 1; 
		var maxMovieId = data[0].movieId;

		for (var i = 0; i < data.length; i++) {
			var movieId = data[i].movieId;
			if (counts[movieId] === undefined) {
				counts[movieId] = 0;
			}
			counts[movieId] += 1;
		}

		for (var j in counts) {
			if (counts[j] > maxcount) { 
				maxcount = counts[j];
				maxMovieId = j;
			}	 
		}

		Movie.findOne({_id: maxMovieId}, (err, data) => {
			console.log(data.title); 
		});
	});
};
