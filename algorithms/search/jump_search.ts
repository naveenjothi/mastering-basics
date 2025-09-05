const arr = [10, 7, 9, 3, 11, 15, 13];

function jumpSearch(arr: number[], target: number) {
  let i = 0;
  const jumpVal = Math.floor(Math.sqrt(arr.length));
  while (i < arr.length && arr[i] < target) {
    i += jumpVal;
  }

  const start = Math.max(0, i - jumpVal);
  const end = Math.min(i, arr.length - 1);

  for (let j = start; j <= end; j++) {
    if (arr[j] == target) {
      return j;
    }
  }

  return -1;
}

console.log(
  "Element found at index",
  jumpSearch(
    arr.sort((a, b) => a - b),
    15
  )
);
