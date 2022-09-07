class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.list = [];
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val);
    // swap 'val' with the last element
    this.#swap(idx, this.list.length - 1);
    // pop 'val' from the array
    this.list.pop();
    // update the last element's index to be 'val's' index
    this.map.set(this.list[idx], idx);
    // delete 'val' from the map
    this.map.delete(val);
    return true;
  }
  /**
   * @return {number}
   */
  getRandom() {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }

  #swap(a, b) {
    let temp = this.list[a];
    this.list[a] = this.list[b];
    this.list[b] = temp;
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const rs = new RandomizedSet();
rs.insert(1);
rs.insert(2);
rs.insert(3);
rs.remove(2);
console.log(rs);
