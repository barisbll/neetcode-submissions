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
     * @return {void}
     */
    reorderList(head) {
        // find middle node
        let slow = head;
        let fast = head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // slow should be the last element of the first list
        // cut the connection between left and right lists
        let prev = null;
        let curr = slow.next;
        slow.next = null;

        // reverse right node
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }


        // reorder both nodes
        let dummy = new ListNode();
        let reverse = prev;
        let inOrder = head;
        while (inOrder) {
            dummy.next = inOrder;
            inOrder = inOrder.next;
            dummy = dummy.next;

            if (reverse) {
                dummy.next = reverse;
                reverse = reverse.next;
                dummy = dummy.next;
            }
        }

        return head;


    }
}
