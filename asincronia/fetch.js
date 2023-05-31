/* eslint-disable no-unused-vars */
// PREV const urlBooks = 'https://www.googleapis.com/books/v1/volumes';
// const queries = '?q=peces';

const urlTasks = 'http://localhost:3000/tasks/';
const id = '3';

const newTask = {
  title: 'new',
  owner: 'Pepe',
  isCompleted: false,
};

const updateTask = {
  isCompleted: true,
};

try {
  // GET
  // const response = await fetch(urlTasks + id);
  // const data = await response.json();
  // console.log(data);

  // POST
  // const response = await fetch(urlTasks, {
  //   method: 'post',
  //   body: JSON.stringify(newTask),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // PATCH
  // const response = await fetch(urlTasks + id, {
  //   method: 'PATCH',
  //   body: JSON.stringify(updateTask),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // DELETE
  const response = await fetch(urlTasks + id, {
    method: 'delete',
  });

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.log(error.message);
}
