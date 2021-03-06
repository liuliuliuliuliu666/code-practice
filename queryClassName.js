function queryClassName(node, name) {  
    var starts = '(^|[ \n\r\t\f])', ends = '([ \n\r\t\f]|$)'; 
    var array = [], regex = new RegExp(starts + name + ends), 
    elements = node.getElementsByTagName("*"), 
    length = elements.length, i = 0, element; 
    while (i < length) { 
        element = elements[i]; 
        if (regex.test(element.className)) { 
            array.push(element); 
        } 
        i += 1; 
    } 
    return array; 
} 
// 自己实现一个函数，查找某个DOM节点下面的包含某个class的所有DOM节点？
// 不允许使用原生提供的 getElementsByClassName querySelectorAll 等原生提供DOM查找函数。