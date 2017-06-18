var rejectedP = new Promise(function (resolve, reject) {
	resolve( Promise.reject("Oops") );
});

rejectedP.then( function fulfilled() {
					console.log("fulfilled");
					},
				function rejected(err) {
					console.log(err);
				}
	 		);