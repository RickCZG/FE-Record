function resolveAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	});
}

async function add1(x) {
	let a = resolveAfter2Seconds(22);
	let b = resolveAfter2Seconds(33);

	return x + await a + await b;
}

add1(10).then(data => {
	console.log(data);
})

async function add2(x) {
	let a = await resolveAfter2Seconds(100);
	let b = await resolveAfter2Seconds(200);
	return x + a + b;
}

add2(100).then(data => {
	console.log(data);
})