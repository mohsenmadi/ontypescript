const mostRepeated = <T>(array: T[]): T | 'none' => {
  if (!array.length) {
    return 'none';
  }

  const map = new Map<T, number>();
  let mostRep;
  let maxCount = 0;

  array.forEach((element: T) => {
    let count = map.get(element);
    if (!count) {
      count = 0;
    }
    map.set(element, ++count);

    if (count > maxCount) {
      maxCount = count;
      mostRep = element;
    }
  });

  console.log(map)

  map.delete(mostRep);

  const mapMaxValue = Math.max(...[...map.values()])

  return mapMaxValue === maxCount ? 'none' : mostRep;
};

const data = [1, 2, 3, 4, 3, 5, 2, 3, 1, 5, 3, 5, 3, 1, 1, 1, 2, 5, 1, 3];
console.log(mostRepeated(data));

export {};
