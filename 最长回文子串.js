
// 2.中心扩展法
function longestHuiWenSubstring(s){
    let len = s.length;
    function centerSpread(left,right){
        while(left>=0&&right<len&&s[left]==s[right]){
            left--;
            right++;
        }
        return {left:left+1,right:right-1};
    }
    let start=0,end=0;
    for(let i=0;i<len;i++){
        let obj1 = centerSpread(i,i);
        let obj2 = centerSpread(i,i+1);
        let maxObj = obj1.right-obj1.left > obj2.right-obj2.left ? obj1 : obj2;
        if(maxObj.right-maxObj.left>end-start){
            start = maxObj.left;
            end = maxObj.right;
        }
    }
    return s.substring(start,end+1);
}

s = "cbbd";
console.log(longestHuiWenSubstring(s));

// 暴力法

var longestPalindrome = function(s) {
    function isPalindrome(str) {
    var len  = str.length
    var middle = parseInt(len/2)
    for(var i = 0;i<middle;i++){
        if(str[i]!=str[len-i-1]){
            return false
        }
    }
    return true
}
var ans = '';
var max = 0;
var len = s.length
for(var i = 0;i<len;i++){
    for(var r = i+1;r<=len;r++){
        var tmpStr = s.substring(i,r)
        if(isPalindrome(tmpStr) && tmpStr.length > max){
            ans = s.substring(i,r)
            max = tmpStr.length;
        }
    }
}
return ans;
};