class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        return this.helper(0, nums);
    }

    helper(i, nums) {
        if (i === nums.length) {
            return [[]];
        }

        const layerRes = [];
        const permutations = this.helper(i+1, nums);
        for (const permutation of permutations) {
            for (let j=0; j<permutation.length + 1; j++) {
                const pCopy = [...permutation];
                pCopy.splice(j, 0, nums[i]);
                layerRes.push(pCopy);
            }
        }

        return layerRes;
    }
}
