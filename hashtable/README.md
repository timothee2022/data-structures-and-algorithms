## Code Challenge 26

### Problem domain

Implement a Hashtable Class with the following methods:

* set
  * Arguments: key, value
  * Returns: nothing
  * This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  * Should a given key already exist, replace its value from the value argument given to this method.

* get
  * Arguments: key
  * Returns: Value associated with that key in the table

* has
  * Arguments: key
  * Returns: Boolean, indicating if the key exists in the table already.

* keys
  * Returns: Collection of keys

* hash
  * Arguments: key
  * Returns: Index in the collection for that key


### Code

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

