function getRandomStr(len) {
    var str = "";
    for( ; str.length < len; str += Math.random().toString(36).substr(2));
    return str.substr(0, len);
}