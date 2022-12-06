interface Obj {
  name: string;
  age: number;
  info: {
    address: string;
    position: string;
  };
}
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
