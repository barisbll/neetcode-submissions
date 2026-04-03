class Solution {

    constructor() {
        this.directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],

        ]
    }
 
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let counter = 0;
        const totalRow = grid.length;
        const totalCol = grid[0].length;
        
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === "1") {
                    counter++;
                    this.dfs([i, j], grid, totalRow, totalCol);
                }
            }
        }

        return counter;
    }


    dfs([row, col], grid, totalRow, totalCol) {
        grid[row][col] = "0";

        const nodes = this.findPossibleNodes([row, col], grid, totalRow, totalCol);

        for (const node of nodes) {
            this.dfs(node, grid, totalRow, totalCol)
        }
    }

    findPossibleNodes([row, col], grid, totalRow, totalCol) {
        const res = [];
        for (const direction of this.directions) {
            const newRow = row + direction[0];
            const newCol = col + direction[1];

            if ((newRow >=0 && newRow < totalRow) && (newCol >= 0 && newCol < totalCol) && grid[newRow][newCol] === "1") {
                res.push([newRow, newCol]);             
            }
        }

        return res;
    }
}
