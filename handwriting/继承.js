/**
 * 原型链继承
 */
// 原型链继承的缺点在于
// 1. 如果是引用数据类型的属性，会共享同一块地址，但是大多情况下这是不符合预期的
// 2. 不能传值
function superType(name = "Lucy") {
  this.name = name;
  this.age = 18;
  this.arr = [1, 2];
}
superType.prototype.sayAge = function () {
  console.log(this.age);
};
function subType1() {}
subType1.prototype = new superType();
const obj1 = new subType1();
obj1.arr.push(3);
const obj2 = new subType1();
obj1.sayAge();
console.log(obj1.arr, obj2.arr); // [1,2,3] [1,2,3]

/**
 * 盗用构造函数继承
 */
// 盗用构造函数的优点是可以传参，
// 缺点在于:
// 原型链上属性没法获取
function subType2(name) {
  superType.call(this, name);
}
const obj3 = new subType2("mike");
const obj4 = new subType2();
console.log(obj3.name); // mike
console.log(obj3.sayAge); // undefined

/**
 * 组合继承 原型链 + 盗用构造函数
 * 缺点 ： 会调用两次父函数，创建继承的属性会加在子函数和子函数身上
 */

function subType3() {
  superType.call(this);
}
subType3.prototype = new superType();
const obj5 = new subType3();
console.dir(obj5);
/**
subType3
    age: 18
    arr: (2) [1, 2]
    name: "Lucy"
    [[Prototype]]: superType
        age: 18
        arr: (2) [1, 2]
        name: "Lucy"
 */

/**
 * 原型式继承
 * 以下函数等效于 Object.create(o);
 * Object.create()的第二个参数传入一个对象，通过描述符添加属性，类似于Object.defineProperties
 */
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

/**
 * 寄生式继承
 * 类似于寄生构造函数和增强模式
 * 用于增强原型式继承创造出来的对象
 */
function object2() {
  let clone = object({});
  clone.sayName = function () {};
  return clone;
}

/**
 * 寄生式组合继承(重要！)
 */
function subType4() {
  superType.call(this);
}
function inheritPrototype(subType, superType) {
  const prototype = Object.create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
inheritPrototype(subType4, superType);
// subType4.prototype = superType.prototype; // 直接把父类原型盖上去的话 所继承的父类函数的原型键会丢 使用instanceof就查不到了 所以要单独再包一层
const obj6 = new subType4();
console.dir(obj6);
obj6.sayAge();
