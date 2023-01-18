import { insertLast, xhrData } from './lib/index.js';
// import {} from './lib/dom/insert';

xhrData.get(
  'https://jsonplaceholder.typicode.com/users',
  res => {
    // insertLast('body', JSON.stringify(res));
  },
  err => {
    // insertLast('body', '데이터 로딩에 실패했습니다. ');
  },
);
