let data = [8, 4, 2, 1, 3, 5];

const insertionSort = <T>(arr: T[] = []): T[] => {
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

console.log(insertionSort(data));
