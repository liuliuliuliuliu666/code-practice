// 方法一：Array.from
// Array.from(document.querySelectorAll('div'))

// 方法二：Array.prototype.slice.call()
// Array.prototype.slice.call(document.querySelectorAll('div'))

// 方法三：扩展运算符
// [...document.querySelectorAll('div')]

// 方法四：利用concat
// Array.prototype.concat.apply([], document.querySelectorAll('div'));