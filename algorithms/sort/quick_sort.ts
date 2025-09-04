let data = [8, 4, 2, 1, 3, 5];

function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let i = -1;

  const pivot = arr[arr.length - 1];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[i + 1]];
  const left = quickSort(arr.slice(0, i + 1));
  const right = quickSort(arr.slice(i + 2));

  return [...left, pivot, ...right];
}

console.log(quickSort(data));
