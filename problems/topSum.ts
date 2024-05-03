const topSum = (arr: number[], target: number): [number, number] | string => {

  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      console.log(map)
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }

  return '*** no sum ***'
}

console.log(topSum([2, 7, 11, 15, 4, 1], 17))


// O(n^2)
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < target; j++) {
//     if (arr[i] + arr[j] === target) {
//       return [i, j];
//     }
//   }
// }
