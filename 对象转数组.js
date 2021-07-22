//注意对象必须是以下格式的才可以通过此方式转化为数组
//获取的DOM集合，以及函数的arguments也可以通过此方式转化为数组
var obj={
    0:'qian',
    1:'long',
    2:'chu',
    3:'tian',
    length:4
}
// var _slice=[].slice;
// var objArr=_slice.call(obj);

objArr = Array.prototype.slice.call(obj);
console.log(objArr);