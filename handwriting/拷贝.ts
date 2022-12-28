interface Obj {
  name: string;
  age: number;
  info: {
    address: string;
    position: string;
  };
}
// @ts-ignore
const obj = {
  name: "Lucy",
  age: 18,
  info: {
    address: "xxx",
    position: "xxx",
  },
};
const copy = (obj: Obj): Obj => {
  const temp: Obj = {} as Obj;
  for (const i in obj) {
    // @ts-ignore
    temp[i] = obj[i];
  }
  return temp as Obj;
};
const copyObj1 = copy(obj);
const copyObj2 = { ...obj };
const copyObj3 = Object.assign({}, obj);
const arr = [1, 2, { name: "test" }];
const copyArr1 = Array.from(arr);
const copyArr2 = [...arr];
const copyArr3 = arr.concat([]);

const deepClone = (obj: any) => {
  const temp = {};
  if (typeof obj === "function") return obj;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  // @ts-ignore
  for (const attr in obj) {
    console.log(attr);
    // @ts-ignore
    temp[attr] = obj[attr] instanceof Object ? deepClone(obj[attr]) : obj[attr];
  }
  return temp;
};
const deepCloneObj = deepClone(obj);
// @ts-ignore
obj.info.address = "yyy";
console.log(deepCloneObj);
