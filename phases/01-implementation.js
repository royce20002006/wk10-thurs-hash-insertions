class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let nn = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    let current = this.data[index];

    if(!current) {
      this.data[index] = nn;      
    } else {
      while (current.next) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        current = current.next;
      }

      nn.next = this.data[index];
      this.data[index] = nn; 
      
      
    }
    this.count++
    
  }


  read(key) {
   let index = this.hashMod(key);
   let current = this.data[index];
   while (current) {
    if (current.key === key) {
      return current.value;
    }
    current = current.next;
   } 
  }


  resize() {
    let arr = this.data;
    this.capacity *= 2;
    this.data = new Array(this.capacity).fill(null);
    let current = this.data;
    this.count = 0;
    for (let i = 0; i < arr.length; i++) {
      

        while (arr[i]) {
  
          current = this.insert(arr[i].key, arr[i].value);
          
          arr[i] = arr[i].next;
        }
      
    }
  }


  delete(key) {
    // Your code here 
  }
}


module.exports = HashTable;
