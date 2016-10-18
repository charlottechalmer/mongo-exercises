/*jshint esversion:6*/
module.exports = function(mongoose, Checkout, Movie) {
	// What user(s) had the most checkouts?
	Checkout.find({}, (err, data) => {
		var counts = [];
		var maxcount = 1;
		var maxUserId = data[0].userId;

		for (var i = 0; i < data.length; i++) {
			var userX = data[i].userId;
			if (counts[userX] === undefined) {
				counts[userX] = 0;
			}
			counts[userX] += 1;
		}

		for (var j = 0; j < counts.length; j++) {
			if (counts[j] > maxcount) {
				maxcount = counts[j];
				maxUserId = j;
			}
		}
		console.log("UserId: " + maxUserId);
	});
};

//user 31
//december
//into the wild