function hashStringToInt(key, tableSize) {
  let hash = 17;
  for (let i = 0; i < key.length; i++) {
    hash = (13 * hash * key.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(2000);
  numsItems = 0;

  setItem = (key, value) => {
    this.numsItems++;
    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) return;
    return this.table[idx].find((x) => x[0] === key)[1];
  };
}

const myHashTable = new HashTable();
myHashTable.setItem("Name", "Pawan");
myHashTable.setItem("age", 25);
myHashTable.setItem("age", 30);
myHashTable.setItem("address", "Lucknow");
console.log(myHashTable.getItem("age"));
console.log(myHashTable.getItem("address"));
console.log(myHashTable.getItem("Name"));
console.log(myHashTable.numsItems);
