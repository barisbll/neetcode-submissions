/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const map = new Map();
        return this.dfs(node, map);
    }


    dfs(node, map) {
        if (node === null) return null;

        if (map.has(node)) return map.get(node);

        const copy = new Node(node.val);
        map.set(node, copy);

        for (const nei of node.neighbors) {
            copy.neighbors.push(this.dfs(nei, map));
        }

        return copy;
 
    }
}
