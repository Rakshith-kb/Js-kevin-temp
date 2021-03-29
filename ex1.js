// The kelvin temp is constant
const kelvin = 293;
// console.log(kelvin)

// convert to celsius
let celsius = kelvin - 273;
// console.log(celsius)

let newton = celsius * (33/100);
// console.log(newton)
newton = Math.floor(newton)
// console.log(newton)
console.log(`The ${kelvin} kelvin temperature is ${newton} newton temperature`);
