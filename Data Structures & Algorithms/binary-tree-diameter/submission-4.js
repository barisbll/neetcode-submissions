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
    diameterOfBinaryTree(root) {
        const res = {
            max: 0,
        }
        this.helper(root, res)
        return res.max;
    }

    helper(root, res) {
        if (!root) return 0;

        const left = this.helper(root.left, res);
        const right = this.helper(root.right, res);

        res.max = Math.max(res.max,  Math.max(left, right));
        res.max = Math.max(res.max,  left + right);

        return 1 + Math.max(left, right);
    }

}
