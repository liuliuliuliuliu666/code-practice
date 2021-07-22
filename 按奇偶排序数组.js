// 偶数排前面，奇数排后面
var sortArrayByParity = function(A) {
    return A.filter(a=>a%2===0).concat(A.filter(a=>a%2===1));
};

// 奇数下标为奇数，偶数下标为偶数
function sortByIndex(A){
    let len = A.length;
    let o = 0;
    let j = 1;
    let res = new Array(len);
    A.forEach(item => {
        if(item%2===0){
            res[o] = item;
            o = o + 2;
        }else{
            res[j] = item;
            j = j + 2;
        }
    });
    return res;
}