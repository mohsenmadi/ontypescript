const binSearch = (arr: number[], target: number): number => {

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {

    const mid = left + Math.floor((right - left) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21))
