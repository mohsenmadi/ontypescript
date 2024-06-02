// find duplicates in an array

const findDuplicates = <T>(array: T[]) => {
  const map = new Map<T, number>();
  const result: Array<T> = [];

  array.forEach((item) => {
    let count = map.get(item) || 0;
    map.set(item, ++count);
    if (count === 2) { // it was count > 1, which would push 2 or more recurrent items several times
      console.log('=== pushing:', item, count)
      result.push(item);
    }
  })

  return result;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 6, 7, 7, 8, 7, 7, 9, 3, 4, 90, 43, 23, 11, 76, 23]));

export {}
