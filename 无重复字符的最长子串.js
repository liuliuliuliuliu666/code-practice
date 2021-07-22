function lengthOfLongestSubString(s){
    const set = new Set();
    let i=0,j=0,maxLength=0;
    if(s.length===0){
        return 0;
    }
    for(i;i<s.length;i++){
        if(!set.has(s[i])){
            set.add(s[i]);
            maxLength = Math.max(maxLength,set.size);
        }else{
            while(set.has(s[i])){
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
        }
    }
    return maxLength;
}

str = 'aabcbaab';
console.log(lengthOfLongestSubString(str));

// 使用 map 来存储当前已经遍历过的字符，key 为字符，value 为下标

// 使用 i 来标记无重复子串开始下标，j 为当前遍历字符下标

// 遍历字符串，判断当前字符是否已经在 map 中存在，存在则更新无重复子串开始下标 i 为相同字符的下一位置，此时从 i 到 j 为最新的无重复子串，更新 max ，将当前字符与下标放入 map 中

// 最后，返回 max 即可

function lengthOfLongestSubString2(s){
    let i=0,j=0,maxLength=0;
    const map = new Map();
    if(s.length===0){
        return 0;
    }
    for(j;j<s.length;j++){
        if(map.has(s[j])){
            i = Math.max(map.get(s[j])+1,i)
        }
        maxLength = Math.max(j - i +1,maxLength);
        map.set(s[j],j);
    }
    return maxLength;
}
console.log(lengthOfLongestSubString2(str));