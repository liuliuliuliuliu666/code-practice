/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let len = nums.length;
    let max = 0,count=1;
    for(let i=0;i<len;i++){
        if(nums[i]<nums[i+1]){
            count++;
        }else{
            max = Math.max(count,max);
            count = 1;
        }
    }
    return max;
};