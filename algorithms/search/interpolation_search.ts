const arr = [10, 7, 9, 3, 11, 15, 13];

function interpolationSearch(arr: number[], target: number) {
  let l = 0;
  let h = arr.length - 1;

  while (l <= h && target >= arr[l] && target <= arr[h]) {
    const pos = Math.floor(
      l + ((target - arr[l]) * (h - l)) / (arr[h] - arr[l])
    );

    if (arr[pos] == target) {
      return pos;
    } else if (arr[pos] < target) {
      l = pos + 1;
    } else {
      h = pos - 1;
    }
  }
  return -1;
}

console.log(
  "Element found at index",
  interpolationSearch(
    arr.sort((a, b) => a - b),
    7
  )
);
