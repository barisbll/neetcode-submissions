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
     * @return {boolean}
     */
    isBalanced(root) {
        this.res = true
        this.height(root);
        return this.res;
    }

    height(root) {
        if (root === null) return true;

        let left = this.height(root.left);
        let right = this.height(root.right);

        if (Math.abs(left - right) > 1) {
            this.res = false;
        }

        return 1 + Math.max(left, right);
    }
}
