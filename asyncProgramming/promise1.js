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



var p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("done_P1");
	}, 1000)
});
var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("done_P2");
	}, 400)
});
Promise.race([p1, p2]).then(function(msg) {
	// return msg;
	return new Promise(function(resolve, reject){
		resolve(msg);
	});
}).then(function(msg){
	console.log(msg);
})



var pp1 = new Promise(function(resolve, reject){
	// resolve(new Promise(function(resolve, reject){
	// 	reject("Fucking");
	// }));
	resolve("Fucking");
});
pp1.then(function (data) {
	console.log("data: " + data);
},
	function (err) {
		console.log("err: " + err);
	}
);










