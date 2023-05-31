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

try {
  const data = await makeAsync();
  console.log(data);
} catch (error) {
  console.error(error.message);
}
