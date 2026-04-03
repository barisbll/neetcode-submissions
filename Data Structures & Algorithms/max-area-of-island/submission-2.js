class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0

        for (let row = 0; row < grid.length; row++ ) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 1) {
                    let counter = [0];
                    this.dfs(row, col, grid, counter)
                    max = Math.max(counter[0], max);
                }
            }
        }

        return max;
    }


    dfs(row, col, grid, counter) {
        if (grid[row][col] === 0) return;
        
        counter[0] = counter[0] + 1;
        grid[row][col] = 0;
        
        const neighbors = this.findPossibleNodes(row, col, grid);
        for (const nei of neighbors) {
            this.dfs(nei[0], nei[1], grid, counter);
        }
    }

    findPossibleNodes(row, col, grid) {
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ]

        const totalRow = grid.length;
        const totalCol = grid[0].length;
        const res = [];

        for (const direction of directions) {
            const newRow = row + direction[0];
            const newCol = col + direction[1];

            if ((newRow >= 0 && newRow < totalRow) && (newCol >= 0 && newCol < totalCol) &&
                grid[newRow][newCol] === 1) {
                    res.push([newRow, newCol]);
                }
        }

        return res;
    }
}
