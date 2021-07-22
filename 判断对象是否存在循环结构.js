const obj = {
    a: 1,
    b: 'a',
    c: {
        e: 'ee'
    }
}
obj.c.d = obj;

function isLoop (obj) {
    const hasSeenArr = [];
    function LoopDetect (obj) {
        if (typeof obj === 'object' && obj !== null) {
            if (hasSeenArr.indexOf(obj) !== -1) {
                return true;
            }
            hasSeenArr.push(obj);
            console.log(hasSeenArr);
            for(let key in obj){
                if(obj.hasOwnProperty(key) && LoopDetect(obj[key])){
                    return true;
                }
            }
        }
        return false;
    }
    return LoopDetect(obj);
}

console.log(isLoop(obj));