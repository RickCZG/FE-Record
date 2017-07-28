function clone(obj) {
	if(obj === null)
		return null;
	var res = {};
	for(var i in obj){
		res[i] = (obj[i] instanceof Date) ? new Date(obj[i].getTime()) : (typeof obj[i] === 'object' ? clone(obj[i]) : obj[i]);
	}
	return res;
}

var oo = {
	a: 123,
	b:{
		bb: 11,
		bbb: 'aa'
	},
	c: {
		cc: {
			ccc: {
				cccc: {

				}
			}
		}
	}
}

var otherO = clone(oo);

oo.c.cc.ccc.add = 1111;

console.log(otherO.c.cc.ccc);



