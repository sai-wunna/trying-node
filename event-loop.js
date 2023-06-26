//__________Event Loop______________


console.log("Befor callback function"); // it works first

setTimeout(() => {
    console.log("callback function done"); // it works last
}, 0);

setInterval(() => {
    console.log("writhing.....")
}, 3000);

console.time();
for( let i = 0; i < 100000; i++){
    let num = 0;
    num = num + i;
}
console.timeEnd();

console.log("One After callback function");// it works continuously ignoring callback functions
console.log("Two After callback function");
console.log("Three After callback function");
console.log("Four After callback function");