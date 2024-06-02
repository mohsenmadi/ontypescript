const binSearch = (array: number[], target: number): number[] => {
  let left = 0;
  let right = array.length - 1;

  let mid;
  while (left <= right) {

    mid = left + Math.floor((right - left) / 2);

    if (target === array[mid]) {
      return [mid];
    } else if (target < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

  }
  return [-1, left];
};

const toggle = (array: number[], target: number) => {
  const index = binSearch(array, target);
  console.log(index);
  if (index[0] > -1) {
    array.splice(index[0], 1);
  } else {
    array.splice(index[1], 0, target);
  }
};

const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 16, 17, 19, 20];
console.log(array1);
const target = 18;

toggle(array1, target);
console.log(array1);

toggle(array1, target);
console.log(array1);

export {};
