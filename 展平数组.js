const arr = [1, [2, [3, [4, 5]]], 6];

// 方法一：使用flat()
const res1 = arr.flat(Infinity);
console.log(res1);

// 方法二：利用正则
const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');
console.log(res2);

// 方法三：正则改良版本
const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
console.log(res3);

// 方法四：使用reduce
const flatten = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}
const res4 = flatten(arr);
console.log(res4);

// 方法五：函数递归
const res5 = [];
const fn = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i]);
    } else {
      res5.push(arr[i]);
    }
  }
}
fn(arr);
console.log(res5);


