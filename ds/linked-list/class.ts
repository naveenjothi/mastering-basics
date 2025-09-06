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

  deleteFirst() {
    if (!this.head) {
      throw new Error("Head is already Empty");
    }

    this.head = this.head.next;
  }

  deleteLast() {
    if (!this.head) {
      throw new Error("Head is already Empty");
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node: MySinglyNode<T> | null = this.head;

    while (node.next && node.next.next) {
      node = node.next;
    }

    node.next = null;
  }

  deleteAt(index: number) {
    if (index == 0) {
      this.deleteFirst();
      return;
    }
    let count = 0;

    let node: MySinglyNode<T> | null = this.head;

    while (node?.next && count < index - 1) {
      node = node.next;
      count++;
    }

    if (!node || !node.next) {
      throw new Error("Index out of bounds");
    }

    node.next = node.next.next;
  }

  deleteValue(value: T) {
    if (!this.head) {
      throw new Error("List is empty");
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let node: MySinglyNode<T> | null = this.head;

    while (node?.next && node.next.data != value) {
      node = node.next;
    }

    if (!node.next) {
      throw new Error("Value not found in the list");
    }

    node.next = node.next.next;
  }
}
