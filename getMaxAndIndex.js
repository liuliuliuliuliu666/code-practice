// 找出数组中出现次数最多的元素，并给出其出现过的位置
function getMaxAndIndex(arr) {
    var obj = {};
    arr.forEach(function (item, index) {
        if (!obj[item]) {
            obj[item] = { indexs: [index] }
        } else {
            obj[item]['indexs'].push(index);
        }
    });
    var num = 0;//记录出现次数最大值
    var str = '';//记录出现次数最多的字符
    var reArr;//返回最大值的位置数组
    for (var attr in obj) {
        var temp = obj[attr]['indexs'];
        if (temp.length > num) {
            num = temp.length;
            str = attr;
            reArr = temp;
        }
    }
    return {
        maxStr: str,
        indexs: reArr
    }
}