export class MyArray<T> {
  data: T[] = [];
  size: number = 0;
  constructor(inputVal: number) {
    this.size = inputVal;
  }

  get length() {
    let len = 0;
    this.data.forEach((_) => {
      len += 1;
    });
    return len;
  }

  push(val: T): number {
    const updateIndex = this.length - 1 + 1;
    this.data[updateIndex] = val;
    return this.length;
  }

  pop(): T {
    const updatedData = [];
    const lastElement = this.data[-1];
    for (let index = 0; index < this.length - 1; index++) {
      updatedData[index] = this.data[index];
    }
    this.data = updatedData;
    return lastElement;
  }

  unshift(...items: T[]): number {
    const updatedLength = this.length + items.length;
    const updatedData = [];
    for (let index = 0; index < updatedLength; index++) {
      if (index < items.length) {
        updatedData[index] = items[index];
      } else {
        updatedData[index] = this.data[index - items.length];
      }
    }
    this.data = updatedData;
    return updatedLength;
  }
}
