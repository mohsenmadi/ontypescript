function getNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 5;
      if (rnd > 2.5) {
        resolve(rnd);
      } else {
        reject(new Error(`*** ${rnd} is less than half 5`));
      }
    }, 1000);
  });
}

function doubleNumber(num: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2)
    }, 1000); // Double the number after 1 second
  });
}

// getNumber()
//     .then(number => {
//       console.log('First number:', number);
//       return doubleNumber(number); // Return another promise
//     })
//     .then(newNumber => {
//       console.log('Doubled number:', newNumber);
//     })
//     .catch(error => {
//       console.error('Error:', error.message);
//     });

async function processNumbers() {
  try {
    const number = await getNumber();
    console.log('Received number:', number);
    const newNumber = await doubleNumber(number);
    console.log('Doubled number:', newNumber);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processNumbers();
