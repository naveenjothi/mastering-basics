export class MyArray<T> {
  data: T[] = [];
  constructor() {}

  get length() {
    let len = 0;
    this.data.forEach((_) => {
      len += 1;
    });
    return len;
  }

  push(...val: T[]): number {
    // for array
    const updatedLength = this.length + val.length;
    const updatedData = [];
    for (let index = 0; index < updatedLength; index++) {
      if (index < this.length) {
        updatedData[index] = this.data[index];
      } else {
        updatedData[index] = val[index - this.length];
      }
    }
    this.data = updatedData;

    // for dynamic array
    // for (const key of val) {
    //   this.data[this.length] = key;
    // }
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

  shift(): T {
    const lastElement = this.data[0];
    const updatedData = [];
    for (let index = 1; index < this.length; index++) {
      updatedData[index] = this.data[index];
    }
    this.data = updatedData;
    return lastElement;
  }

  splice(start: number, deleteCount?: number): T[] {
    const updatedData: T[] = [];
    const removedElements = [];
    for (let index = 0; index < start; index++) {
      removedElements[index] = this.data[index];
    }

    const updatedLength = deleteCount ? start + deleteCount : this.length;
    for (let index = start; index < updatedLength; index++) {
      removedElements[index] = this.data[index];
    }
    this.data = updatedData;
    return removedElements;
  }
}
