class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = {};
        return this.helper(0, nums, memo);
    }

    helper(i, nums, memo) {
        if (i >= nums.length) {
            return 0;            
        }

        if (memo[i] !== undefined) {
            return memo[i];
        }

        const rob = nums[i] + this.helper(i+2, nums, memo);
        const skip = this.helper(i+1, nums, memo);

        memo[i] = Math.max(rob, skip);
        return memo[i];
    }
}
