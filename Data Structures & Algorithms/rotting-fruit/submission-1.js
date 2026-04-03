class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const queue = [];
        const res = [];

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 2) {
                    queue.push([row, col]);
                }
            }
        }

        while (queue.length > 0) {
            const size = queue.length;
            const level = [];
            for (let i = 0; i < size; i++) {
                const node = queue.shift();

                const possibleNodes = this.findPossibleNodes(node, grid);
                for (const pNode of possibleNodes) {
                    grid[pNode[0]][pNode[1]] = 2;
                    level.push(pNode);
                    queue.push(pNode);
                }

            }
            if (level.length > 0) res.push(level);
        }

        for (let row = 0; row < grid.length; row++) {
           for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 1) return -1;
            }
        }


        return res.length;
    }

    findPossibleNodes([row, col], grid) {
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ]
        const res = [];

        for (const direction of directions) {
            const newRow = row + direction[0];
            const newCol = col + direction[1];

            if ((newRow >= 0 && newRow < grid.length) &&
                (newCol >= 0 && newCol < grid[0].length &&
                (grid[newRow][newCol] === 1))) {
                    res.push([newRow, newCol]);
                }
        }


        return res;
    }
}
