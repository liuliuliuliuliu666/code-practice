/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = nums.length;
    let dp = new Array(len).fill(1);
    let max = 1;
    for(let i=0;i<len;i++){
        for(j=0;j<i;j++){
            if(nums[j]<nums[i]){
                dp[i] = Math.max(dp[j]+1,dp[i]);
            }
        }
        max = Math.max(dp[i],max);
    }
    return max;
};