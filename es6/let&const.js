var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6

var b = [];
for (var j = 0; j < 10; j++) {
	b[j] = function() {
		console.log(j);
	}
}
b[6](); // 10

for(var k = 0;k < 3;k++){
	let k = "abc";
	console.log(k); //abc
}


// 没有变量提升


// ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量
// 从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

/*
	var tmp = 123;
	if (true) {
	  tmp = 'abc'; // ReferenceError
	  let tmp;
	}
*/

// let实际上为 JavaScript 新增了块级作用域。


// ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。
// ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。

function f(){
	console.log("Outside");
}

(function () {

	function f() {
			console.log("Inside");
	}

	f();
}());



// const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
/*
	const foo; // error
*/

const foo = {};
foo.prop = 123;
console.log(foo.prop);
foo.prop = 444;
console.log(foo.prop);





























