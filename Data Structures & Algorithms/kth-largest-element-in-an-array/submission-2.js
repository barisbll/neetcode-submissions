class MinHeap {
  constructor() {
    this.data = [];
  }

  size() { return this.data.length; }
  peek() { return this.data[0]; }

  // — Insert: push to end, bubble UP —
  push(val) {
    this.data.push(val);
    this._bubbleUp(this.data.length - 1);
  }

  _bubbleUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.data[i] >= this.data[parent]) break;  // heap property satisfied
      [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
      i = parent;
    }
  }

  // — Extract min: swap root with last, pop, bubble DOWN —
  pop() {
    const min = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this._bubbleDown(0);
    }
    return min;
  }

  _bubbleDown(i) {
    const n = this.data.length;
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (left < n && this.data[left] < this.data[smallest]) smallest = left;
      if (right < n && this.data[right] < this.data[smallest]) smallest = right;

      if (smallest === i) break;  // heap property satisfied
      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      i = smallest;
    }
  }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new MinHeap();

        for (const num of nums) {
            maxHeap.push(num);

            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }

        return maxHeap.peek();
    }
}













