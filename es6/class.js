class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		console.log("x: " + this.x + "y: " + this.y);
	}
}

let p = new Point(1, 2);
let p2 = new Point(11, 22);
p.toString();

console.log(typeof Point);
console.log(Point === Point.prototype.constructor);


// 实例的属性除非显式定义在其本身（即定义在this对象上），
// 否则都是定义在原型上（即定义在class上）
console.log(p.hasOwnProperty("x"));
console.log(p.hasOwnProperty('toString'));
console.log(p.__proto__.hasOwnProperty("toString"));

// 与 ES5 一样，类的所有实例共享一个原型对象。
console.log(p.__proto__ === p2.__proto__);

p.__proto__.sayHello = function () {
	console.log("sayHello");
}
p.sayHello();
p2.sayHello();


class MyClass {

	constructor() {

	}
	static classMethod(){
		return "static";
	}

	get prop() {
		console.log("getter");
	}

	set prop(value) {
		console.log("setter: " + value);
	}
}

let inst = new MyClass();
inst.prop = "123";
inst.prop;
console.log(MyClass.classMethod());


class MyClassChild extends MyClass {
	static classMethod() {
		return super.classMethod() + " too";
	}
}
console.log(MyClassChild.classMethod());

class Rectangle {
	constructor(length, width) {
		console.log(new.target === Rectangle);
		this.length = length;
		this.width = width;
	}
}
var obj = new Rectangle(3, 4);


class Shape {
	constructor() {
		if(new.target === Shape){
			throw new Error("本类不能实例化");
		}
	}
}

class Square extends Shape {
	constructor(length, width){
		super();
	}
}

var x = new Shape();
var y = new Square(3, 4);





























