export class MyHashNode<K, V> {
  key: K;
  value: V;
  next: MyHashNode<K, V> | null = null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}
