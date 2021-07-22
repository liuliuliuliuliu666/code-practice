function bubbleSort(arr) {  
    for(let i = 0,l=arr.length;i<l-1;i++) { 
        for(let j = i+1;j<l;j++) { 
            if(arr[i]>arr[j]) { 
                let tem = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = tem; 
            } 
        } 
    } 
    return arr; 
} 

let  arr=[5,3,7,2,9,8];
console.log(bubbleSort(arr));