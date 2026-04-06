class Solution {
    climbStairs(n) {
    const memo = {};
    return this.helper(0, n, memo);
    }

    helper(sum, target, memo) {
        if (sum === target) return 1;
        if (sum > target) return 0;
        if (memo[sum] !== undefined) return memo[sum];
        memo[sum] = this.helper(sum + 1, target, memo) + this.helper(sum + 2, target, memo);
        return memo[sum];
    }
}
