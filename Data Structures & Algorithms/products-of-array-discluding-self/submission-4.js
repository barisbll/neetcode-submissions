class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let prodSoFar = 1;
            for (let value of map.values()) {
                prodSoFar *= value.val;
                value.prod = value.prod * nums[i];
            }

            const temp = {
                idx: i,
                val: nums[i],
                prod: prodSoFar
            }

            map.set([i, nums[i]], temp);
        }

        return [...map.values()].sort((a, b) => a - b).map(obj => obj.prod);
    }
}
