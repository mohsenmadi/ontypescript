function abc() {
  console.log('hii');
}

const value = new abc();
console.log(value);

// function getNumber(): Promise<number> {
//   return new Promise((resolve, reject) => {
//     // Simulate some asynchronous operation
//     // setTimeout(() => {
//       const rnd = Math.random();
//       if (rnd > 0.1) {
//         resolve(42); // Resolve the promise with the number 42
//       } else {
//         reject(new Error("Failed to get the number")); // Reject the promise with an error
//       }
//     // }, 1000); // Wait for 1 second
//   });
// }
//
// getNumber().then(num => console.log(num))

// Using the promise
// getNumber()
//     .then(number => {
//       console.log('Received number:', number);
//     })
//     .catch(error => {
//       console.error('Error:', error.message);
//     });


// function foo() {
//   return new Promise((resolve, reject) => {
//     return resolve('foo says hello');
//   })
// }
//
// const result = foo()
// console.log(result.then(console.log));

// setTimeout(() => {
//   console.log('timeout')
// }, 0)
//
// Promise.resolve().then(() => console.log('promise'))
// console.log('end')


// for (var i = 1; i <= 3; i++) {
//   function incValue(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000)
//   }
//
//   incValue(i);
// }

// function createCounter() {
//   let count = 0;
//
//   return () => {
//     return count++;
//     // console.log(count);
//   }
// }
//
// const myCounter = createCounter();
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// myCounter();
// myCounter();
// myCounter();
// myCounter();




// foo()
//
// // var foo = 20;
//
// function foo() {
//   console.log("foo  - foo");
// }
// foo();


// let x = 20;
//
// function foo() {
//   console.log(x);
//   let x = 10;
// }
//
// foo();


// function createCounter() {
//   let count = 0;  // 'count' is a local variable created by createCounter
//
//   // The function 'increment' is a closure that is defined inside createCounter
//   // and has access to its local variables and parameters
//   const increment = () => {
//     count++;
//     console.log(count);
//   };
//
//   return increment;
// }


//
// const myCounter = createCounter(); // createCounter ends here, but 'count' lives on
// // myCounter(); // Outputs: 1
// // myCounter(); // Outputs: 2
//
// function anyName() {
//   let a = 1;
//   let b = 2;
//   c = 3;
//   //
//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
// }
//
// console.log(c);
// // console.log(a);
// // console.log(b);

export {}
