// 利用二分查找
/**
 * 
 * 二分查找，逼近目标值
首先是边界情况: 0、1的平方根分别是0、1
剩下就是 x>=2 的情况：
左右指针指向左右边界
求出中位数 mid
如果 mid 的平方正好等于 x，则返回 mid
如果 mid 的平方小于 x，说明平方根落在 mid 和 right 之间，让 left=mid
如果 mid 的平方大于 x，说明平方根落在 left 和 mid 之间，让 right=mid
退出循环的条件是左右指针相邻了。它们俩中有一个是平方根。再判断一下就好
 */
function mySqrt(x){
    if(x<2){
        return x;
    }
    let left = 1,right = x>>1; // 除以2并取整，缩小一下遍历的范围
    while(left+1<right){
        let mid = left + ((right-left)>>1);  // 退出循环时，它们相邻
        if(mid === x/mid){
            return mid;
        }else if(mid < x/mid){
            left = mid;
        }else{
            right = mid;
        }
    }
    if(right > x/right){
        return left;
    }
    return right;
}