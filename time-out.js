function certificate() {
    console.log("i am Expert");
}
console.log("first: i am first here");
console.log("second: i am second here");
console.log("third: i am third here");
setTimeout(certificate, 6000);
setTimeout(function () {
    console.log("i am use VS code");
}, 5000);
setTimeout(() => {
    console.log("i am learning web development");
}, 4000);
console.log("final: i am fourth here");