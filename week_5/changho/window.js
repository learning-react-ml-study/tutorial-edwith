console.log(window)

var a = 3;
console.log(window.a);

// const promise = new Promise((resolve, reject) => {
//     if(success) {
//         resolve(value)
//     } else {
//         reject(error)
//     }
// })

// const dice = {
//     sides: 6,
//     roll() {
//         return Math.floor(Math.random() * this.sides) + 1;
//     }
// }

// const promise = new Promise((resolve, reject) => {
//     const n = dice.roll();
//     setTimeout(() => {
//         (n > 1) ? resolve(n) : reject(n);
//     }, n * 1000);
// })

// promise.then(result => console.log(`result is ${result}`))
// .catch(result => console.log(`error is ${result}`))