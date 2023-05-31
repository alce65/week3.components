// ES6 - ES2015

const makeAsync = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const r = Math.random();
      if (r > 0.5) {
        const data = 22333324332;
        resolve(data);
      } else {
        reject(new Error('Error ' + r));
      }
    }, 1000);
  });

makeAsync()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message);
  });

fetch()
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
