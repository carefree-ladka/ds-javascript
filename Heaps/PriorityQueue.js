class PriorityQueue {
  /**
   * @param {(a: any, b: any) => -1 | 0 | 1} compare -
   * compare function, similar to parameter of Array.prototype.sort
   * time complexity O(n) where n is number of elements in arr
   */
  constructor(compare, arr) {
    this.compare = compare;
    // for numbers compare = (a, b) => a - b makes it a min heap
    // for numbers compare = (a, b) => b - a makes it a max heap
    this.arr = [];

    // the part below isn't required but it's useful to know because it allows to heapify an array in O(n)
    // instead of O(n * log(n)) if we do it using add() call for all elements in arr
    // for more info google "linear time complexity of building a heap"
    if (arr) {
      this.arr = arr;
      const startIndex = Math.floor(this.size() / 2) - 1;
      for (let i = startIndex; i >= 0; i--) {
        this.#sinkDown(i);
      }
    }
  }

  /**
   * return {number} amount of items
   * time complexity O(1)
   */
  size() {
    return this.arr.length;
  }

  /**
   * returns the head element
   * time complexity O(1)
   */
  peek() {
    return this.arr[0];
  }

  /**
   * @param {any} element - new element to add
   * time complexity O(log(n))
   */
  add(element) {
    this.arr.push(element);
    this.#bubbleUp(this.size() - 1);
  }

  /**
   * remove the head element
   * @return {any} the head element
   * time complexity O(log(n))
   */
  poll() {
    this.#swap(0, this.size() - 1);
    const res = this.arr.pop();
    this.#sinkDown(0);
    return res;
  }

  /*
   * time complexity O(log(n))
   */
  #bubbleUp(cur) {
    while (cur > 0) {
      const parent = Math.floor((cur - 1) / 2);
      if (this.compare(this.arr[cur], this.arr[parent]) < 0) {
        // if child is smaller than parent, swap them
        this.#swap(cur, parent);
        cur = parent;
      } else {
        return;
      }
    }
  }

  /*
   * time complexity O(log(n))
   */
  #sinkDown(cur) {
    while (cur < this.size() - 1) {
      let j = cur * 2 + 1; // search for the smallest child
      // left child index is cur * 2 + 1
      // right child index is cur * 2 + 2;
      if (j + 1 < this.size() && this.compare(this.arr[j + 1], this.arr[j]) < 0)
        j++; // right child is
      // smaller than the left child
      if (j < this.size() && this.compare(this.arr[j], this.arr[cur]) < 0) {
        // if smallest child is smaller than parent, swap them
        this.#swap(cur, j);
        cur = j;
      } else {
        return;
      }
    }
  }

  /*
   * time complexity O(1)
   */
  #swap(i, j) {
    const t = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = t;
  }
}

const pq = new PriorityQueue((a, b) => b - a);
// [4, 1, 0, 10, 3, 6, 2].forEach((x) => pq.add(x));

function KLargest(nums = [], k) {
  nums.forEach((x) => pq.add(x));

  while (k > 0) {
    console.log(pq.poll());
    k--;
  }
}

KLargest([4, 1, 0, 10, 3, 6, 2], 3); //10 6 4
