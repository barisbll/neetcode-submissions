class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const combs = [];
        const currCombs = [];
        const currSum = 0;
        this.helper(0, nums, target, currSum, currCombs, combs);
        return combs;
    }

    helper(i, nums, target, currSum, currCombs, combs) {
        if (currSum === target) {
            combs.push([...currCombs]);
        }

        if (currSum > target) {
            return;
        }

        for (let j=i; j<nums.length; j++) {
            currCombs.push(nums[j]);
            this.helper(j, nums, target, currSum + nums[j], currCombs, combs);
            currCombs.pop();
        }
    }
}
