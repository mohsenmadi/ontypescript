const mostRepeated = <T>(array: T[]): T | undefined => {

  if (array.length === 0) return undefined;

  const map = new Map<T, number>();

  let mostRepeated = undefined;
  let maxCount = 0;
  let maxCountOccurrences = 0;

  for (const item of array) {
    let count = (map.get(item) || 0) + 1;
    map.set(item, count);

    if (count > maxCount) {
      maxCount = count;
      mostRepeated = item;
      maxCountOccurrences = 1;
    } else if (count === maxCount) {
      maxCountOccurrences++;
    }
  }

  console.log(map)

  return maxCountOccurrences > 1 ? undefined : mostRepeated;
};

const data = [1, 1, 2, 3, 4, 5, 5, 5, 1, 1, 6, 7, 1, 2, 5, 5];
console.log(mostRepeated(data));

export {};

// if (!array.length) {
//   return 'none';
// }
//
// const map = new Map<T, number>();
// let mostRep = undefined;
// let maxCount = 0;
//
// array.forEach((element: T) => {
//   let count = map.get(element) || 0;
//   map.set(element, ++count);
//
//   if (count > maxCount) {
//     maxCount = count;
//     mostRep = element;
//   }
// });
//
// console.log(map, mostRep);
//
// map.delete(mostRep);
//
// // const mapMaxValue = Math.max(...[...map.values()])
// // return mapMaxValue === maxCount ? 'none' : mostRep;
//
// const mapMaxCountSame = new Set([...map.values()]).has(maxCount);
// return mapMaxCountSame ? 'none' : mostRep;
