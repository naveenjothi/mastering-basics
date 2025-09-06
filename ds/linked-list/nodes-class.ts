export class MySinglyNode<T> {
  data: T | null = null;
  next: MySinglyNode<T> | null;
  constructor(val: T) {
    this.data = val;
    this.next = null;
  }
}

export class MyDoublyNode<T> {
  data: T | null = null;
  next: MyDoublyNode<T> | null;
  prev: MyDoublyNode<T> | null;
  constructor(val: T) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}
