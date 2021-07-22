var isValid = function(s){
    if(!s||s.length<1){
        return true;
    }
    let sum = 0;
    const n = s.length;
    for(let i=0;i<n;i++){
        let c = s[i];
        if(c=='('){
            sum++;
        }else{
            if(sum==0){
                return false;
            }else{
                sum--;
            }
        }
    }
    return sum==0?true:false;
}

console.log(isValid('(()))'));