const topSum2 = (arr: number[], target: number, skipIndex = -1): number[] => {
  const map = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    if (i === skipIndex) continue;
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(arr[i], i);
  }
  return [];
};

const topSum3 = (arr: number[], target: number): number[] => {
  for (let i = 0; i < arr.length; i++) {
    const ts2 = topSum2(arr, target - arr[i], i);
    if (!ts2.length || ts2.includes(i)) {
      continue;
    }
    if (arr[i] + arr[ts2[0]] + arr[ts2[1]] === target) {
      return [i, ...ts2];
    }
  }
  return [];
};

console.log(topSum2([2, 7, 11, 15, 4, 1], 11));
console.log(topSum3([2, 7, 11, 15, 4, 1], 12));
