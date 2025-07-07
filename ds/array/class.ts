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
    const lastElement = this.data[this.length - 1];
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
    const firstElement = this.data[0];
    const updatedData = [];
    for (let index = 1; index < this.length; index++) {
      updatedData[index - 1] = this.data[index];
    }
    this.data = updatedData;
    return firstElement;
  }

  splice(start: number, deleteCount?: number): T[] {
    if (start < 0) {
      start = this.length + start;
      if (start < 0) start = 0;
    }

    const updatedData: T[] = [];
    const removedElements: T[] = [];
    let i = 0;
    let j = 0;

    const actualDeleteCount =
      deleteCount === undefined ? this.length - start : deleteCount;

    while (i < this.length) {
      if (i >= start && actualDeleteCount + start > i) {
        removedElements[j++] = this.data[i];
      } else {
        updatedData[i - j] = this.data[i];
      }
      i++;
    }
    this.data = updatedData;
    return removedElements;
  }

  slice(start: number, end?: number): T[] {
    const copiedElements: T[] = [];

    let j = 0;
    let i = 0;

    const actualEnd = end === undefined ? this.length - start : end;

    while (i < this.length) {
      if (i >= start && actualEnd + start > i) {
        copiedElements[j++] = this.data[i];
      }
      i++;
    }

    return copiedElements;
  }

  concat(...items: ConcatArray<T>[]): T[] {
    const updatedData = [];
    let i = 0;
    for (let index = 0; index < this.length; index++) {
      updatedData[i++] = this.data[index];
    }
    // flattening arrays
    for (let index = 0; index < items.length; index++) {
      const subArr = items[index];
      for (let j = 0; j < subArr.length; j++) {
        updatedData[i++] = subArr[j];
      }
    }
    return updatedData;
  }

  static of<InferedType>(...vals: InferedType[]): MyArray<InferedType> {
    const newArr = new MyArray<InferedType>();
    for (let i = 0; i < vals.length; i++) {
      newArr.data[i] = vals[i];
    }
    return newArr;
  }

  static isArray(arg: any): boolean {
    return typeof arg === "object" && Symbol.iterator in arg;
  }

  static from<InferedType>(
    iterable: Iterable<InferedType> | ArrayLike<InferedType>
  ) {
    const result = new MyArray<InferedType>();

    if (typeof iterable == "object" && Symbol.iterator in iterable) {
      for (const item of iterable) {
        result.push(item);
      }
    } else if (typeof iterable == "object" && "length" in iterable) {
      for (let index = 0; index < iterable.length; index++) {
        result.push(iterable[index]);
      }
    }

    return result;
  }

  includes(val: T) {
    let i = 0;

    while (i < this.length) {
      if (this.data[i] === val) {
        return true;
      }
      i++;
    }

    return false;
  }

  indexOf(val: T): number {
    let i = 0;

    while (i < this.length) {
      if (this.data[i] === val) {
        return i;
      }
      i++;
    }
    return -1;
  }

  lastIndexOf(val: T): number {
    let i = this.length - 1;

    while (i >= 0) {
      if (this.data[i] === val) {
        return i;
      }
      i--;
    }
    return -1;
  }

  find(
    predicate: (value: T, index: number, obj: T[]) => boolean,
    thisArg?: any
  ): T | undefined {
    for (let index = 0; index < this.length; index++) {
      const currVal = this.data[index];
      const isMatch = predicate.call(
        thisArg ?? this,
        currVal,
        index,
        this.data
      );
      if (isMatch) {
        return currVal;
      }
    }
    return undefined;
  }

  findIndex(
    predicate: (value: T, index: number, obj: T[]) => boolean,
    thisArg?: any
  ): number {
    for (let index = 0; index < this.length; index++) {
      const currVal = this.data[index];
      const isMatch = predicate.call(
        thisArg ?? this,
        currVal,
        index,
        this.data
      );
      if (isMatch) {
        return index;
      }
    }
    return -1;
  }
}
