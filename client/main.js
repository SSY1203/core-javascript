import { insertLast, tiger, delayP, getNode, renderUserCard } from './lib/index.js';

// rendingUserList
// ajax get user List
// 유저 카드 생성
// 생성된 카드로 렌더링

// userList.js로 가기
// renderUserCard 함수를 만들기
// 만들어진 함수 안에 createUserCard를 던지고,
// renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록

const userCardContainer = getNode('.user-card-inner');

async function rendingUserList(url) {
  let response = await tiger.get(url);
  let userData = response.data;

  renderUserCard(userCardContainer, userData);
}

rendingUserList('https://jsonplaceholder.typicode.com/users/1');
