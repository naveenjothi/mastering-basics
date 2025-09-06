import { MySinglyNode } from "./nodes-class";

export class MySinglyLinkedList<T> {
  head: MySinglyNode<T> | null;
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head == null;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node?.next) {
      node = node.next;
      count++;
    }
    return count;
  }

  insertAtBeginning(value: MySinglyNode<T>) {
    const oldHead = this.head;

    this.head = value;

    this.head.next = oldHead;
  }

  insertAtEnd(value: MySinglyNode<T>) {
    if (!this.head) {
      this.head = value;
      return;
    }
    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    node.next = value;
  }

  insertAt(index: number, value: MySinglyNode<T>) {
    let count = 0;

    if (index === 0) {
      this.insertAtBeginning(value);
      return;
    }

    let node = this.head;

    while (node?.next && count < index - 1) {
      node = node.next;
      count++;
    }

    if (!node) {
      throw new Error("Index out of bounds");
    }

    const nextNode = node.next;
    node.next = value;
    value.next = nextNode;
  }
}
