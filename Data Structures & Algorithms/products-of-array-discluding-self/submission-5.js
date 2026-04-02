class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        let tempProduct = 1;

        for (let num of nums) {
            res.push([num, tempProduct]);
            tempProduct *= num;
        }

        tempProduct = 1;
        for (let i = res.length - 1; i >= 0; i--) {
            res[i][1] *= tempProduct;
            tempProduct *= res[i][0];
        }

        return res.map(val => val[1]);
    }
}
