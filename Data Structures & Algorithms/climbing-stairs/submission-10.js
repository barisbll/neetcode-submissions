class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {};
        return this.dfs(0, n, memo);
    }

    dfs(sum, target, memo) {
        if (sum === target) return 1;
        if (sum > target) return 0;
        if (memo[sum] !== undefined) return memo[sum];

        memo[sum] = this.dfs(sum+1, target, memo) + this.dfs(sum+2, target, memo);
        return memo[sum];
    }
}
