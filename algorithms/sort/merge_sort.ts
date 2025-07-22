let data = [8, 4, 2, 1, 3, 5];

const merge = <T>(left: T[], right: T[]): T[] => {
  const result: T[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
};

const mergeSort = <T>(arr: T[] = []): T[] => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge<T>(left, right);
};
