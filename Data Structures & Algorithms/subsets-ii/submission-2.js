class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const subsets = [];
        const currSet = [];

        this.helper(0, nums, currSet, subsets);

        return subsets;
    }

    helper(i, nums, currSet, subsets) {
        if (i === nums.length) {
            subsets.push([...currSet]);
            return;
        }

        currSet.push(nums[i]);
        this.helper(i+1, nums, currSet, subsets);
        currSet.pop();

        while (nums[i+1] && nums[i] === nums[i+1]) {
            i++;
        }

        this.helper(i+1, nums, currSet, subsets);
        
    }
}
