export class MyStack<T> {
  count = 0;
  data: Record<number, T> = {};
  constructor() {}

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count == 0;
  }

  push(...vals: T[]) {
    for (const val of vals) {
      this.data[this.count] = val;
      this.count += 1;
    }
  }

  pop() {
    if (this.isEmpty()) return undefined;
    this.count -= 1;
    const lastElement = this.data[this.count];
    delete this.data[this.count];
    return lastElement;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    const lastElement = this.data[this.count - 1];
    return lastElement;
  }
}
