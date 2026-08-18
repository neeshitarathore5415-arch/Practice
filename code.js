// This is for concept clearance

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

// gar tumhara actual command sudo cp ls networkchuck hai, toh woh alag meaning rakhega—ls ko source file maan kar networkchuck naam ki destination par copy karega.