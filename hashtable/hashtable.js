class HashTable {
  constructor() {
    this.table = new Array(456);
    this.size = 0;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const target = this.hash(key);
    return this.table[target];
  }

  has(key){
    let index = this.hash(key);
    if (this.buckets[index]) {
      return true;

    } else {
      return false;
    }

  }

}

module.exports = HashTable;
