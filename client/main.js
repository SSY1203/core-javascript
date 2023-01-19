import { insertLast, tiger, delayP, createUserCard } from './lib/index.js';

// 유저 카드 생성
// 생성된 카드로 렌더링

// rendingUserList
// ajax get user List

async function rendingUserList(url) {
  let response = await tiger.get(url);
  let userData = response.data;

  console.log(userData);
}

rendingUserList('https://jsonplaceholder.typicode.com/users/1');
