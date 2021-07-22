var longestValid = function(s){
    let max = 0;
    if(!s || s.length<=1){
        return max;
    }
    let n = s.length;
    var stack = [];
    for(let i=0;i<n;i++){
        let tmpMax = 0;
        for(let j=i;j<n;j++){
            if(s[j]=='('){
                stack.push('(');
                tmpMax++;
            }else if(s[j]==')'){
               if(stack.length<1){
                   max = max<tmpMax?tmpMax:max;
                   break;
               }else{
                   stack.pop();
                   tmpMax++;
               }
            }
        }
        if(stack.length<1){
            max = max<tmpMax?tmpMax:max;
        }
        stack = [];
    }
    return max;
}

console.log(longestValid('((())))()'));