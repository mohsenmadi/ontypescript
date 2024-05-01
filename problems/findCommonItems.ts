function findCommonItems<T>(array1: T[], array2: T[]): T[] {

  const set1 = new Set(array1);

  const commons: T[] = [];

  for(const elem of array2) {

    if (set1.has(elem)) {
      commons.push(elem);
    }
  }

  return commons;
}

const array1 = [1, 2, 3, 4, 2];
const array2 = [2, 5, 6, 7, 4];

console.log(findCommonItems(array1, array2));
