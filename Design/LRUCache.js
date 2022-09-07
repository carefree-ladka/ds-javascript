//class Node
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.connect(this.head, this.tail);
  }
  add = (node) => {
    this.connect(node, this.head.next);
    this.connect(this.head, node);
  };
  removeLastNode = () => {
    const lastNode = this.tail.prev;
    this.delete(lastNode);
    return lastNode;
  };
  move2Front = (node) => {
    this.delete(node);
    this.add(node);
  };
  connect = (node1, node2) => {
    node1.next = node2;
    node2.prev = node1;
  };
  delete = (node) => {
    this.connect(node.prev, node.next);
  };
}

class LRUCache {
  constructor(capacity) {
    this.map = {};
    this.list = new DoublyLinkedList();
    this.capacity = capacity;
    this.size = 0;
  }

  get = (key) => {
    //if the key doesnt exist return -1
    if (!this.map[key]) return -1;
    //if the key exists , move to front of linkedlist
    //return value
    const node = this.map[key];
    this.list.move2Front(node);
    return node.value;
  };
  put = (key, value) => {
    //if key exists, update the value and move to front
    if (this.map[key]) {
      const node = this.map[key];
      node.value = value;
      this.list.move2Front(node);
      return;
    }

    //if key doesnt exist
    //if at capacity=>remove last node from linkedlist and hash map
    //size--
    if (this.size === this.capacity) {
      const lastNode = this.list.removeLastNode();
      delete this.map[lastNode.key];
      this.size--;
    }

    //add to linkedlist
    //save to hash map
    //increment size
    const newNode = new Node(key, value);
    this.list.add(newNode);
    this.map[key] = newNode;
    this.size++;
  };
}

const lru = new LRUCache(2);
lru.put("1", 1);
lru.put("2", 2);
lru.put("3", 5);
lru.put("4", 6);

console.log(lru.get(1)); //-1
console.log(lru.get(2)); //2
console.log(lru.get(3)); //5
console.log(lru.get(4)); //6
