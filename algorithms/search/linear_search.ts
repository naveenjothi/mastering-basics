const arr = [10, 7, 9, 3, 11, 15, 13];

function linearSearch(arr: number[], target: number) {
  let i = 0;
  while (i < arr.length && arr[i] != target) {
    i++;
  }
  return i < arr.length ? i : -1;
}

console.log("Element found at index", linearSearch(arr, 15));
