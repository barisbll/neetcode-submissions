class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const combs = [];
        const curr = [];
        this.helper(1, n, k, curr, combs);
        return combs;

    }

    helper(i, n, k, curr, combs) {
        if (curr.length === k) {
            combs.push([...curr]);
            return;
        }

        if (i > n) {
            return;
        }

        for (let j=i; j<n+1; j++) {
            curr.push(j);
            this.helper(j + 1, n, k, curr, combs);
            curr.pop();
        }
    }
}
