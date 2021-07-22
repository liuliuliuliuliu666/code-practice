const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

// 方法一：利用Set
const res1 = Array.from(new Set(arr));
console.log(res1);

// 方法二：两层for循环+splice
const unique1 = arr => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
        len--;
        j--;
      }
    }
  }
  return arr;
}
console.log(unique1(arr));

// 方法三：利用indexOf
const unique2 = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) res.push(arr[i]);
  }
  return res;
}
console.log(unique2(arr));

// 方法四：利用Map
const unique3 = arr => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(unique3(arr));


var arr1 = [123,"meili","123","mogu",123];
var arr2 = [123,[1,2,3],[1,"2",3],[1,2,3],"meili"];
var arr3 = [123,{a:1},{a:{b:1}},{a:"1"},{a:{b:1}},"meili"];


// 如果数组元素包含对象等类型，该如何去重？
// 使用JSON.stringify去重
const removeDuplicates = (arr) => {
  let map = new Map();
  arr.forEach(item => {
    map.set(JSON.stringify(item),item)
  });
  return [...map.values()];
}

console.log(removeDuplicates(arr1));
console.log(unique3(arr1));
console.log(removeDuplicates(arr2));
console.log(unique3(arr2));  //去不了为数组的重复元素
console.log(removeDuplicates(arr3));
console.log(unique3(arr3));  //去不了为对象的数组元素