console.log('Linea 1');
let i = 1;
do {
  i++;
} while (i < 1_000_000_000);

console.log('Linea 2');
setTimeout(() => console.log('Linea 3'), 1000);
console.log('Linea 4');
console.log('Linea 5');
setTimeout(() => console.log('Linea 6'));
console.log('Linea 7');
