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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) return false;

        if (this.isSame(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }


    isSame(p, q) {
        if (p === null && q === null) return true;
        if ((p === null && q !== null) || (p !== null && q === null)) return false;

        let l = this.isSame(p.left, q.left);
        let r = this.isSame(p.right, q.right);

        return p.val === q.val && l && r;
    }
}
