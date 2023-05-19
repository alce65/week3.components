// ES2017

export const makeAsync = async () => 22;

console.log(makeAsync());

makeAsync().then((data) => console.log(data));
