/*jshint esversion:6*/
module.exports = function(mongoose, Checkout, Movie) {
	// Which users checked out any of the Lord of the Rings trilogy?
	//id 8, 11, 15
	var lorUsers = [];
	Checkout.find(  
		{$or:[
			{movieId:{"$in":[8, 11, 15]}}
			]}, (err, data) => {
				// console.log(data);
				// console.log(data.length);
				for (var i = 0; i < data.length; i++) {
					var userXId = data[i].userId;
					if (lorUsers.indexOf(userXId) == -1) {
						lorUsers.push(userXId);
					}
				}
				console.log(lorUsers);
				console.log(lorUsers.length);
		});
	// Checkout.find({movieId: 8}, (err, data) => {
	// 	console.log(data);
	// });
	// Checkout.find({movieId: 11}, (err, data) => {
	// 	lorUsers.push(data.userId);
	// });
	// Checkout.find({movieId: 15}, (err, data) => {
	// 	lorUsers.push(data.userId);
	// });
	// console.log(lorUsers);
};
