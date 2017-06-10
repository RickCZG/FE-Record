class Point {

}

class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);	// 必须要有super，不然没有this
		this.color = color;
	}

	toString() {
		return this.color + " " + super.toString();
	}
}
let cp = new ColorPoint();
console.log(cp instanceof Point);
console.log(cp instanceof ColorPoint);

// Object.getPrototypeOf方法可以用来从子类上获取父类
console.log(Object.getPrototypeOf(ColorPoint) === Point);


// super
class A {
	constructor() {
		this.prop = 123;
		console.log(new.target.name);
	}

	p() {
		return 2;
	}
}
class B extends A {
	constructor() {
  	super();
  	console.log(super.p());
	}
	getProp() {
		return super.prop;
	}
}

let a = new A();
let b = new B();
console.log(b.getProp());

