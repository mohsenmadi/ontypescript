const randomNumGens = (): number => {
  return Math.random() * 5;
}

let rns = [];
for (let i = 0; i < 100; i++) {
  const rn = randomNumGens() / 5 * 8;
  rns.push(Math.floor(rn));
}

console.log(rns)

export {}
