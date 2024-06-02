const nextGreaterElem = (array: number[]): void => {
  for (let i = 0; i < array.length; i++) {
    let next = -1;
    for (let j = i+1; j < array.length; j++) {
      if (array[j] > array[i]) {
        next = array[j];
        break;
      }
    }
    console.log(array[i] + " -> " + next);
  }
}

nextGreaterElem([4, 5, 2, 25]);
nextGreaterElem([13, 7, 6, 12]);
