// find duplicates in an array

const findDuplicates = <T>(arr: T[]): T[] => {

  const map = new Map<T, number>();
  let duplicates: T[] = [];

  arr.forEach((item: T) => {
    let count = map.get(item);
    if (!count) {
      count = 0;
    } else {
      duplicates.push(item);
    }
    map.set(item, ++count);
  })

  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 3, 4, 90, 43, 23, 11, 76, 23]));


export {}
