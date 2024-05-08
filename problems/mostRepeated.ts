const mostRepeated = <T>(array: T[]): T | 'none' => {
  if (!array.length) {
    return 'none';
  }

  const map = new Map<T, number>();
  let mostRep = undefined;
  let maxCount = 0;

  array.forEach((element: T) => {
    let count = map.get(element) || 0;
    map.set(element, ++count);

    if (count > maxCount) {
      maxCount = count;
      mostRep = element;
    }
  });

  console.log(map, mostRep);

  map.delete(mostRep);

  // const mapMaxValue = Math.max(...[...map.values()])
  // return mapMaxValue === maxCount ? 'none' : mostRep;

  const mapMaxCountSame = new Set([...map.values()]).has(maxCount);
  return mapMaxCountSame ? 'none' : mostRep;
};

const data = [1, 2, 4, 5, 2, 1, 5, 5, 1, 1, 1, 2, 5, 5];
console.log(mostRepeated(data));

export {};
