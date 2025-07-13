export class MyStack<T> {
  data: T[] = [];
  constructor() {}

  push(...vals: T[]) {
    for (const val of vals) {
      this.data[this.length] = val;
    }
  }

  pop(): T {
    const updatedData = [];

    const lastElement = this.data[this.length - 1];
    for (let i = 0; i < this.length - 2; i++) {
      updatedData[i] = this.data[i];
    }

    this.data = updatedData;

    return lastElement;
  }

  peek(): T {
    const lastElement = this.data[this.length - 1];
    return lastElement;
  }

  isEmpty() {
    return this.length === 0;
  }

  get length() {
    let length = 0;
    this.data.forEach((_) => {
      length++;
    });
    return length;
  }

  size() {
    return this.length;
  }
}
