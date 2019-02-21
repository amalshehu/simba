import { R, H } from 'https://cdn.jsdelivr.net/gh/santoshrajan/simba/simba.js';
import { db } from './storage/firebase.js';

import addNew from './comps/addnew.js';
import Todos from './comps/todos.js';
const todosRef = db.ref('/todos');
import createTodo from './comps/todo.js';

const initialState = [];
todosRef.on('child_added', function(data) {
  const todosData = data.val();
  R(
    Todos(state => {
      state.todos.unshift(createTodo({ text: todosData.text }));
    })
  );
});
/* Render to #App */
console.log('Ini', initialState);
R(
  H('h1', { className: 'title is-1' }, 'Todo'),
  H(addNew, { className: 'field' }),
  H('p', { className: 'help' }, 'Double click todo below to edit'),
  Todos(state => {
    state.todos = [];
  }),
  document.getElementById('App')
);
