class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        const sorted = nums.map((ele, idx) => [ele, idx]).sort((a, b) => a[0] - b[0]);

        while (l < r) {
            const sum = sorted[l][0] + sorted[r][0];
            if (sum === target) return [sorted[l][1], sorted[r][1]];

            if (sum > target) {
                r--;
                continue;
            }

            if (sum < target) {
                l++;
                continue;
            }
        }

        return [-1, -1];
    }
}
