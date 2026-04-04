class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const last = res[res.length - 1];
            const curr = intervals[i];
            if (last[1] >= curr[0]) {
                const startTime = Math.min(last[0], curr[0]);
                const endTime = Math.max(last[1], curr[1]);
                last[0] = startTime;
                last[1] = endTime;
            } else {
                res.push(curr);
            }
        }

        return res;
    }
}
