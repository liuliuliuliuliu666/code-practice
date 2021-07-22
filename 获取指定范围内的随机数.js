function getRadomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRadomNum(10,20));