class Node {
  constructor(val) {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in curr.children)) {
        curr.children[word[i]] = new Node();
      }
      curr = curr.children[word[i]];
    }
    curr.endOfWord = true;
  }
  search(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let node = curr.children[word[i]];
      if (!node) return false;
      curr = node;
    }
    return curr.endOfWord;
  }
  startsWith(prefix) {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!(prefix[i] in curr.children)) return false;
      curr = curr.children[prefix[i]];
    }
    return true;
  }
}

const trie = new Trie();
["apple", "banana", "mango"].forEach((x) => trie.insert(x));
// console.log(trie.search("banana"));
// console.log(trie.startsWith("lan"));
