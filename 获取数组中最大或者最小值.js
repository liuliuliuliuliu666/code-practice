function maxAndMin(arr){
    return {
    max:Math.max.apply(null,arr.join(',').split(',')),
    min:Math.min.apply(null,arr.join(',').split(','))
    }
}


// 该方法适合一维或者多维数组求最大最小值的情况

console.log(maxAndMin([1,2,[3,4,[5]],0]));
