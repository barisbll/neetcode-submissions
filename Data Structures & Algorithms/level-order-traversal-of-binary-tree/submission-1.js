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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        let queue = [root];
        let res = [];

        while (queue.length > 0) {
            const levelSize = queue.length;
            const level = []

            for (let i = 0; i < levelSize; i++) {
                const ele = queue.shift();

                if (ele.left) {
                    queue.push(ele.left);
                }

                if (ele.right) {
                    queue.push(ele.right);
                }

                level.push(ele.val);
            }

            res.push(level);
        }

        return res;
    }
}
