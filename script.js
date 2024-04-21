import http from 'k6/http';
import { sleep } from 'k6';

const url = 'http://localhost:8080';

export const options = {
  vus: 10000,
  duration: '60s',
};

function getRandomString(maximumLength) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  const titleLength = Math.floor(Math.random() * maximumLength) + 1;
  let title = '';

  for (let i = 0; i < titleLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    title += characters[randomIndex];
  }

  return title;
}

export const createTodo = () => {
  const deadlineAt = new Date();

  deadlineAt.setDate(deadlineAt.getDate() + 7);

  const paylod = JSON.stringify({
    title: getRandomString(50),
    description: getRandomString(200),
    deadlineAt: deadlineAt.toISOString(),
  });

  http.post(`${url}/api/todos/`, paylod, { headers: { 'Content-Type': 'application/json' } });
}

export const doneTodo = () => {
  const response = http.get(`${url}/api/todos/`, { headers: { 'Accept': 'application/json' } });

  const allTodos = response.json();
  const pickedTodo = allTodos[Math.floor(Math.random() * allTodos.length)];

  if (!pickedTodo) return;

  http.del(`${url}/api/todos/${pickedTodo.id}`);
}

// The function that defines VU logic.
//
// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more
// about authoring k6 scripts.
//
export default function () {
  createTodo();
  // doneTodo();

  sleep(1);
}
