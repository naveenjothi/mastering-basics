let data = [8, 4, 2, 1, 3, 5];

const selectionSort = <T>(arr: T[] = []): T[] => {
  const length = arr.length;
  for (let index = 0; index < length; index++) {
    let tempIdx = index;
    for (let j = index + 1; j < length; j++) {
      if (arr[j] < arr[tempIdx]) {
        tempIdx = j;
      }
    }
    [arr[index], arr[tempIdx]] = [arr[tempIdx], arr[index]];
  }
  return arr;
};

console.log(selectionSort(data));
