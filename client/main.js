/* global gsap */

import {
  insertLast,
  tiger,
  delayP,
  getNode as $,
  renderUserCard,
  changeColor,
  renderSpinner,
  createEmptyCard,
  renderEmptyCard,
  getNodes,
  attr,
} from './lib/index.js';

// rendingUserList
// ajax get user List
// 유저 카드 생성
// 생성된 카드로 렌더링

// userList.js로 가기
// renderUserCard 함수를 만들기
// 만들어진 함수 안에 createUserCard를 던지고,
// renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록

const userCardContainer = $('.user-card-inner');

async function rendingUserList() {
  renderSpinner(userCardContainer);

  try {
    await delayP(2000);

    $('.loadingSpinner').remove();

    let response = await tiger.get('http://localhost:3000/users');
    let userData = response.data;

    userData.forEach(data => renderUserCard(userCardContainer, data));

    changeColor('.user-card');

    gsap.to(gsap.utils.toArray('.user-card'), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      // rotation: 360,
      // stagger는 각각 item의 시차를 두게 함
      stagger: 0.2,
      // {
      //   each: 0.1,
      //   // amount: 3,
      //   from: 'edges',
      // },
    });
  } catch (err) {
    renderEmptyCard(userCardContainer);
  }
}

rendingUserList();

function handler(e) {
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');

  if (!deleteButton || !article) return;

  console.log(deleteButton);
  console.log(article);

  let id = attr(article, 'data-index').slice(5);

  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardContainer.innerHTML = '';
    rendingUserList();
  });
}

userCardContainer.addEventListener('click', handler);

// http://localhost:3000/users
