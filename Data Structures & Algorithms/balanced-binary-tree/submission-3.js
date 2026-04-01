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
        return this.height(root)[1];
    }

    height(root) {
        if (root === null) return [0, true];

        let [left, resLeft] = this.height(root.left);
        let [right, resRigth] = this.height(root.right);

        if (Math.abs(left - right) > 1 || !(resLeft && resRigth)) {
            return [0, false]
        }

        return [1 + Math.max(left, right), true];
    }
}
