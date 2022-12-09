function Person(name) {
  this.name = name;
}
function New(fn, ...params) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  const temp = fn.apply(obj, params);
  return temp instanceof Object ? temp : obj;
}
const obj = New(Person, "test");
