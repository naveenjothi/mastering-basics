import { MyHashNode } from "./nodes-class";

export class MyHashMap<K, V> {
  size: number = 0;
  capacity: number = 0;
  private buckets: Array<MyHashNode<K, V> | null>;
  constructor(capacity: number = 10) {
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null);
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  private hash(key: K) {
    const strKey = String(key);
    let hash = 0;
    for (let i = 0; i < strKey.length; i++) {
      hash += strKey.charCodeAt(i);
    }
    return hash % this.capacity;
  }

  put(key: K, value: V) {
    const hashKey = this.hash(key);

    let node = this.buckets[hashKey];

    while (node) {
      if (node.key == key) {
        node.value = value;
        return;
      }
      node = node.next;
    }

    const newNode = new MyHashNode(key, value);
    newNode.next = this.buckets[hashKey];
    this.buckets[hashKey] = newNode;
    this.size++;
  }

  get(key: K) {
    const hashKey = this.hash(key);

    let node = this.buckets[hashKey];

    while (node) {
      if (node.key == key) {
        return node.value;
      }
      node = node.next;
    }

    return null;
  }

  remove(key: K) {
    const hashKey = this.hash(key);

    let node = this.buckets[hashKey];

    let prev: MyHashNode<K, V> | null = null;

    while (node) {
      if (node.key == key) {
        if (!prev) {
          this.buckets[hashKey] = node.next;
        } else {
          prev.next = node.next;
        }
        this.size--;
        return node.value;
      }
      prev = node;
      node = node.next;
    }

    return null;
  }
}
