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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        this.lca = {
            level: 0,
            node: null
        };
        this.getLca(root, p, q, 1);

        return this.lca.node;
    }

    getLca(root, p, q, level) {
        if (root === null) return root;

        let isSelfIncludes = false;

        if (root.val === p.val || root.val === q.val) {
            isSelfIncludes = true;
        }

        const left = this.getLca(root.left, p, q, level+1);
        const right = this.getLca(root.right, p, q, level+1);

        if (isSelfIncludes && (left || right)) {
            if (this.lca.level < level) {
                this.lca.level = level;
                this.lca.node = root;
            }

            return true;
        } else if (!isSelfIncludes && left && right) {
            if (this.lca.level < level) {
                this.lca.level = level;
                this.lca.node = root;
            }

            return true;
        }

        return isSelfIncludes || left || right;

    }
}
