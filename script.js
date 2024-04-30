import http from 'k6/http';
import { check, group } from 'k6';

const url = 'http://localhost:8080';

export const options = {
  executor: 'ramping-arrival-rate',
  stages: [
    { duration: '1m', target: 2000 },
    { duration: '4m', target: 10000 },
  ],
  thresholds: {
    http_req_failed: [
      {
        threshold: 'rate < 0.05',
        abortOnFail: true
      }
    ],
    http_req_duration: [
      {
        threshold: 'p(95)<1000',
        abortOnFail: true
      }

    ],
  }
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


export default function () {

  group('Create Todo', () => {
    const deadlineAt = new Date();

    deadlineAt.setDate(deadlineAt.getDate() + 7);

    const paylod = JSON.stringify({
      title: getRandomString(50),
      description: getRandomString(200),
      deadlineAt: deadlineAt.toISOString(),
    });

    const res = http.post(`${url}/api/todos/`, paylod, { headers: { 'Content-Type': 'application/json' } });

    check(res, {
      'is ok': (r) => r.status === 200 || r.status === 201,
      'is created': (r) => !!(+r.json('id'))
    });
  });

  group('Get all and delete once', () => {
    const response = http.get(`${url}/api/todos/`, { headers: { 'Accept': 'application/json' } });

    const allTodos = response.json();
    const pickedTodo = allTodos[Math.floor(Math.random() * allTodos.length)];

    if (!pickedTodo) return;

    const res = http.del(`${url}/api/todos/${pickedTodo.id}`);

    check(res, { 'done': (r) => r.status === 200 || r.status === 404 });
  });
}
