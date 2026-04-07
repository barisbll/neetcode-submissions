/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head || !head?.next) return false;

        let slow = head;
        let fast = head.next;

        while (fast.next && fast.next.next) {
            if (fast === slow ) {
                return true;
            }

            fast = fast.next.next;
            slow = slow.next;
        }

        return false;
    }
}
