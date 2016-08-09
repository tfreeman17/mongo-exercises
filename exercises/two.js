module.exports = function(mongoose, Checkout, Movie) {
	// Which users checked out any of the Lord of the Rings trilogy?
	
	// * filter through with the parameters of movieID
	// the 3 movies are named 
	// then get the ids dynamiclly 
 //     * get all the users who have checked out the movie # element
 //     */


 	    
 	    Movie.find(
 	    	{ title: { $regex: "The Lord of the Rings:" }},
 	    	function(err, data){
        		console.log(data)
        		var idArr = [];
		    	if (err) {
		           return console.log("error");
		       }
	           for (var i = 0; i < data.length; i++) {
	           		idArr.push(data[i]._id)
	           }
           		console.log(idArr)
           		Checkout.distinct( "userId",
           			{ movieId: { $in: idArr }},
           			function(err, userIds){
           				if (err) {
		           			return console.log(err);
		       			}
						userIds.sort();
                     console.log("These users: " +  userIds + ", checked out one of the Lord of the Rings Movies");
				});
			}
		)
}