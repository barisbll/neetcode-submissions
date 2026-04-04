class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);
        let lastInt = intervals[0];
        let overlaps = 0;
        for (let i = 1; i < intervals.length; i++) {
            if (lastInt[1] > intervals[i][0]) {
                overlaps++;
            } else {
                lastInt = intervals[i]
            }
        }

        return overlaps;
    }
}
