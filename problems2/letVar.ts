// function testVarLet() {
//   if (true) {
//     var varVariable = "I am var";
//     let letVariable = "I am let";
//   }
//
//   console.log(varVariable);  // Outputs: "I am var"
//   console.log(letVariable);  // Throws ReferenceError: letVariable is not defined
// }
//
// function testVarRedeclaration() {
//   var a = 1;
//   console.log(a);  // Outputs: 1
//
//   var a = 2; // Re-declaration of the variable 'a'
//   console.log(a);  // Outputs: 2
// }
//
// testVarRedeclaration();
//
// function testLetRedeclaration() {
//   let b = 1;
//   console.log(b);  // Outputs: 1
//
//   let b = 2; // Attempt to re-declare the variable 'b'
//   console.log(b);  // This line will not be executed
// }
//
// testLetRedeclaration();

var globalVar = 'This is global';
// console.log(window.globalVar);  // Outputs: "This is global"
//
// let globalLet = 'This is also global';
// console.log(window.globalLet);  // Outputs: undefined
