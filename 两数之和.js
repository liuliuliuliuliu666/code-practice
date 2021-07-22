let nums = [2,7,11,15],target=9;
function sums(nums,target){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let temp = target - nums[i];
        if(map.has(temp)){
            return [map.get(temp),i];
        }else{
            map.set(nums[i],i);
        }
    }
}
console.log(sums(nums,target));