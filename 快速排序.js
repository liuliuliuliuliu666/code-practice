function quickSort(arr) {
    if(arr.length<=1) { return arr; } 
    let leftArr = []; 
    let rightArr = []; 
    let q = arr[0]; 
    for(let i = 1,l=arr.length; i<l; i++) { 
        if(arr[i]>q) { 
            rightArr.push(arr[i]); 
        }
        else{ 
            leftArr.push(arr[i]); 
        } 
    } 
    return [].concat(quickSort(leftArr),[q],quickSort(rightArr)); 
}

let  arr=[5,3,7,2,9,8];
console.log(quickSort(arr));