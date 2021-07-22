// 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 “”。
// 示例 1: 输入: [“flower”,“flow”,“flight”]
// 输出: “fl”
// 所有输入只包含小写字母 a-z。

function longestCommonPrefix(strs){
    // 当strs中没有字符串时，返回空子串
    if(strs.length === 0){
        return '';
    }
    let prefix = strs[0]; // prefix用于存放最后的结果，初始值为第一个字符串
    for(let i=1;i<strs.length;i++){
        let j = 0;
        for(j;j<prefix.length&&j<strs[i].length;j++){
            // j 用来遍历prefix字符串和strs[i]字符串
            if(prefix[j]!=strs[i][j]){
                 // 比较到不相等的时候就退出内层循环
                break;
            }
        }
        // 然后截取它们相等的部分重新赋值给prefix
        prefix = prefix.substring(0,j);
        // 截取以后判断下新的prefix是否为空，若为空直接返回
        if(prefix==''){
            return prefix;
        }
    }
    return prefix;
}