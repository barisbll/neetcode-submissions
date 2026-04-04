class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let i = 0;
        const res = [];

        // 1. Intervals Before
        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            res.push(intervals[i]);
            i++;
        }

        // 2. Intervals during
        while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
            const intStart = Math.min(intervals[i][0], newInterval[0]);
            const intEnd = Math.max(intervals[i][1], newInterval[1]);
            newInterval[0] = intStart;
            newInterval[1] = intEnd;
            i++;
        }
        res.push(newInterval);

        // 3. Intervals After
        while (i < intervals.length) {
            res.push(intervals[i]);
            i++;
        }

        return res;
    }
}
