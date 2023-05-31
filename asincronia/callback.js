let data;

const makeAsync = (callback) => {
  setTimeout(() => {
    data = 22333324332;
    callback(data);
  }, 2000);
};

// Crear un ID
makeAsync(() => console.log('ID' + data.toString() + 'OH'));

const generateID = () => console.log('ID' + data.toString() + 'Final');

makeAsync(generateID);

fetch();
