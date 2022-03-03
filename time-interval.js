console.log("one");
console.log("two");
// setInterval(() => {
//      console.log("five"); }, 1000)
let clock = 0;
const timeCout = setInterval(() => {
    clock++
    console.log(clock);
    if (clock > 15) {
        clearInterval(timeCout)
    }
}, 1000)

console.log("three");
console.log("start");