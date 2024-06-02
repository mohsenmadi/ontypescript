const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrtN = Math.sqrt(n);
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

// console.log(isPrime(29))

const primes = (n: number): boolean[] => {
  const primeArray = new Array(n + 1).fill(true);

  primeArray[0] = primeArray[1] = false;
  primeArray[2] = true;
  const sqrtN = Math.sqrt(n);

  let step = 2;

  for (let f = step; f <= sqrtN;) {

    console.log(step);

    for (let i = step; i < n;) {
      i += step;
      primeArray[i] = false;
    }

    step = primeArray.indexOf(true, step + 1);
    f = step;
  }

  return primeArray;
};

const data: number[] = [];

primes(200)
    .forEach((d, i) => {
      if (d) data.push(i);
    });

console.log(data);

export {};
