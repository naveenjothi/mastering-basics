const arr = [10, 7, 9, 3, 11, 15, 13];

function binarySearch(arr: number[], target: number) {
  let i = 0;
  let j = arr.length;
  while (i < j) {
    const mid = Math.floor((i + j) / 2);

    if (target == arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }

  return -1;
}

console.log(
  "Element found at index",
  binarySearch(
    arr.sort((a, b) => a - b),
    15
  )
);
