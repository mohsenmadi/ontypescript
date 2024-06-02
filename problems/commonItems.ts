function commonItems<T>(array1: T[], array2: T[]): T[] {

  const set1 = new Set(array1);
  const commonSet = new Set<T>();

  for(const elem of array2) {
    if (set1.has(elem)) {
      commonSet.add(elem);
    }
  }

  return Array.from(commonSet);
}

const array1 = [1, 2, 3, 4, 2];
const array2 = [2, 5, 6, 7, 4, 4, 4];

console.log(commonItems(array1, array2));

export {}
