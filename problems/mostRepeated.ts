function mostRepeated<T>(array: T[]): T | 'none' {
  if (!array.length) {
    return 'none';
  }

  // @ts-ignore
  const map = new Map<T, number>();
  let maxCount = 0;
  let mostFreq = array[0];

  for (const item of array) {
    let freq = map.get(item);
    if (!freq) {
      freq = 0;
    }
    map.set(item, ++freq);

    if (freq > maxCount) {
      maxCount = freq;
      mostFreq = item;
    }
  }

  map.delete(mostFreq);
  const arr = [...map.values()]
  const secondMaxCount = Math.max(...arr)

  return maxCount === secondMaxCount ? 'none' : mostFreq;
}

const data = [1, 2, 3, 4, 3, 5, 2, 3, 1, 5, 5, 3, 1, 1, 1, 2, 3]
console.log(mostRepeated(data))

export {};
