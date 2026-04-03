class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const res = [];
        for (let row = 0; row < heights.length; row++) {
            for (let col = 0; col < heights[0].length; col++) {
                const temp = {
                    isPacific: false,
                    isAtlantic: false,
                    set: new Set()         
                };

                this.dfs([row, col], heights, temp);

                if (temp.isPacific && temp.isAtlantic) {
                    res.push([row, col]);
                }
            }
        }


        return res;
    }

    dfs([row, col], heights, temp) {
        temp.set.add(`${row}-${col}`);
        if (row === 0 || col === 0) {
            temp.isPacific = true;
        }

        if (row === heights.length -1 || col === heights[0].length - 1) {
            temp.isAtlantic = true;
        }

        if (temp.isPacific && temp.isAtlantic) return temp;




        const possibleNodes = this.findPossibleNodes([row, col], heights, temp);

        for (const node of possibleNodes) {
            this.dfs(node, heights, temp);
        }
    }


    findPossibleNodes([row, col], heights, temp) {
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ]
        const res = [];

        for (const direction of directions) {
            const nR = row + direction[0];
            const nC = col + direction[1];

            if ((nR >= 0 && nR < heights.length) &&
                (nC >= 0 && nC < heights[0].length &&
                (heights[row][col] >= heights[nR][nC]) &&
                (!temp.set.has(`${nR}-${nC}`)))) {
                    res.push([nR, nC])
                }
        }

        return res;
    }
}
















