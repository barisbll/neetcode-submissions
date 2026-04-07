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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head) return head;

        let curr = head;
        let total = 0;
        while (curr) {
            total++;
            curr = curr.next;
        }

        if (total - n === 0) return head.next;

        curr = head;
        let counter = 0;
        while (curr) {
            if (counter === total - n - 1) {
                curr.next = curr.next.next;
                break;
            }

            curr = curr.next;
            counter++;
        }

        return head;

    }
}
