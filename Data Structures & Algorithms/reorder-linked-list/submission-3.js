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
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let curr = slow.next;
        slow.next = null; 
        while (curr !== null) {
            let next = curr.next;

            curr.next = prev;
            prev = curr;
            curr = next;  
        }

        let reversed = prev;
        let temp = head;

        while (reversed !== null) {
            let tempNext = temp.next;
            let reversedNext = reversed.next;

            temp.next = reversed;
            reversed.next = tempNext;

            temp = tempNext;
            reversed = reversedNext;
        }

        return head;
    }
}



















