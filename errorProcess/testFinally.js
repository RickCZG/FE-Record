function testFinally() {
	try{
		console.log('in try');
		return 2;
	}catch(error){
		console.log(error);
		return 1;
	}finally{
		console.log('finally');
		return 0;
	}
}

console.log(testFinally());