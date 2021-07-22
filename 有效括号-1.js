var isValid = function(s){
    if(!s||s.length<1){
        return true;
    }
    const n = s.length;
    const satck = []; //栈
    for(let i=0;i<n;i++){
        const c = s[i];
        if(c=='('){  //遇到左括号
            satck.push(c);
        }else{ //遇到右括号
            if(satck.length<1){
                return false; //无效
            }else{
                satck.pop(); //出栈
            }
        }
    }
    return satck.length>0?false:true;
}

console.log(isValid('(()'));