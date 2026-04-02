class ListNode {
    constructor(key = 0, val = 0, prev = null, next = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new ListNode();
        this.tail = new ListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _addToEnd(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this._remove(node);
        this._addToEnd(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (!this.map.has(key)) {
            const node = new ListNode(key, value, null, null);
            this.map.set(key, node);
            this._addToEnd(node);
        } else {
            const node = this.map.get(key);
            node.val = value;
            this._remove(node);
            this._addToEnd(node);
        }

        if (this.map.size > this.capacity) {
            const lrn = this.head.next;
            this._remove(lrn);
            this.map.delete(lrn.key);
        }
    }
}
