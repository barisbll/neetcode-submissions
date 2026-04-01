/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        const res = {
            counter: 0,
            max: 0
        }
        
        this.dfs(root, res);

        return res.max;
    }

    dfs(root, res) {
        if (root === null) return;

        res.counter += 1;
        res.max = Math.max(res.counter, res.max);

        if (root.right) this.dfs(root.right, res);
        if (root.left) this.dfs(root.left, res);

        res.counter -= 1;
        return root;
    }
}
