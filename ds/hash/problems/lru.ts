class Node<K, V> {
  prev: Node<K, V> | null = null;
  next: Node<K, V> | null = null;
  key: K;
  value: V;
  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

export class LRUCache<K, V> {
  map: Map<K, Node<K, V>>;
  capacity: number;
  head: Node<K, V>;
  tail: Node<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node<K, V>(null as any, null as any);
    this.tail = new Node<K, V>(null as any, null as any);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private addToHead(node: Node<K, V>) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  private removeNode(node: Node<K, V>) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  get(key: K): V | -1 {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key)!;
    this.removeNode(node);
    this.addToHead(node);

    return node.value;
  }

  put(key: K, value: V): void {
    const newNode = new Node(key, value);
    const exists = this.map.has(key);
    if (exists) {
      this.removeNode(newNode);
      this.addToHead(newNode);
    } else {
      if (this.capacity <= this.map.size) {
        const lru = this.tail.prev!;
        this.removeNode(lru);
        this.map.delete(lru.key);
      }

      this.map.set(key, newNode);
      this.addToHead(newNode);
    }
  }
}
