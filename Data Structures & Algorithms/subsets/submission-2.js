class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const subsets = [];
        const currSets = [];
        this.helper(0, nums, currSets, subsets);
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
        this.helper(i+1, nums, currSet, subsets);
    }
}
