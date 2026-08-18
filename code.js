console.log("A");

setImmediate(() => {
  console.log("C");
});

setInterval(() => {
  console.log("Interval");
}, 0);

queueMicrotask(() => {
  console.log("queueMicro");
});

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("D");
});

process.nextTick(() => {
  console.log("E");
});

console.log("F");