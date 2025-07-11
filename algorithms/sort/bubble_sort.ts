let data = [8, 4, 2, 1, 3, 5];

const bubbleSort = <T>(arr: T[] = []): T[] => {
  const length = data.length - 1;
  for (let i = 0; i < length; i++) {
    let swapped = false;
    for (let j = 0; j < length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; cleaner swap method
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};

console.log(bubbleSort(data));
