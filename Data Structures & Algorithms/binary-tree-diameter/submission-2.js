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
        this.max = 0;
        this.height(root);
        return this.max;
    }

    height(root) {
        if (root === null) return 0;

        let left = this.height(root.left);
        let right = this.height(root.right);

        this.max = Math.max(this.max, left + right);

        return 1 + Math.max(left, right);
    }
}
