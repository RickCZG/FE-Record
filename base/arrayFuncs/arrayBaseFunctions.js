// 数组的基本操作函数

// 一.创建数组2种方式
var arr1 = new Array(3); //创建长度为3的数组
console.log(arr1);
var arr2 = new Array("a", "b");
console.log(arr2);

// 二.检测数组
var arr3 = [1, 2];
console.log(Array.isArray(arr3)); // true

// 三.转换方法
var arr4 = ["a", "b", "c"];
console.log(arr4.toString());
console.log(arr4.valueOf());

// 四.栈方法
//      pop() 从数组末尾移除一项，返回被移除项
//      push() 从数组末尾添加一项，返回新长度

// 五.队列方法
//      shift() 移除数组第一项，返回被移除项
//      unshift() 在数组头部添加元素，返回长度

// 六.重排序方法
//      reverse() 反转数组

// 七.操作方法
//      concat() 连接数组，原数组不变
var arr5 = ["aa", "bb", "cc"];
var arr5x = arr5.concat("dd", ["ee", "ff"]);
console.log(arr5);
console.log(arr5x);
//      slice() 切数组，原数组不变
var arr5xx = arr5.slice(0, 2);
console.log(arr5xx);
console.log(arr5);
//      splice() 删除，插入，替换

// 八.迭代方法
//      every(func, opt_this) 对数组每一项运行func，每一项都返回true，则返回true
//      filter(func, opt_this) 对数组每一项运行func，返回结果为true的项组成的数组
//      forEach(func) 对数组每一项运行func，无返回值
//      map(func) 对数组每一项运行func，返回运行结果组成的数组
//      some() 对数组每一项运行func，若任何一项返回true，则返回true

// 九.归并方法
//      reduce(func(prev, cur, index, array)) 
var arr6 = [1, 2, 3, 4, 5];
var sum = arr6.reduce(function(prev, cur, index, arr) {
    return prev + cur;
})
console.log(sum);