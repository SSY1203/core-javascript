/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];

// console.log(typeof arr);

function isArray(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';
}

function isNull(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';
}

// console.log(isArray(arr));

/* 요소 순환 -------------------------------------------------------------- */

// forEach

const user = {};

arr.forEach(function (item, index) {
  this[index] = item;
}, user);

const span = document.querySelectorAll('span');

span.forEach(item => {
  item.addEventListener('click', e => {
    // console.log((e.targe.style.background = 'orange'));
    // console.log(index);
  });
});

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse();
// console.log(arr);

// splice
//            시작 제거 [추가]
arr.splice(1, 0, 23, 5);
// console.log(arr);

// sort
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.
arr.sort((a, b) => a - b);

// console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let todo = ['밥먹기', '미용실가기', '코딩공부하기'];

let template = todo.map(todoList => {
  return /* html */ `<li>${todoList}</li>`;
});

template.forEach(item => {
  document.body.insertAdjacentHTML('beforeend', item);
});

// console.log(template);

let newArray = arr.map(item => item * 2);

// console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// console.log(arr.indexOf(100));

// lastIndexOf

// includes
// console.log(arr.includes(10));

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  { id: 1, name: '로운' },
  { id: 2, name: '승택' },
  { id: 3, name: '연주' },
];

// find
const find = users.find((item, index) => {
  return item.id < 5;
});

// findIndex
const findIndex = users.findIndex(item => {
  return item.id === 3;
});

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
const result = arr.filter(number => {
  return number > 100;
});

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬저',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  },
];

// reduce
const age = friends.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

let template2 = todo.reduce((acc, cur, index) => {
  return /* html */ acc + `<li>할 일${index + 1} : ${cur}의 값</li>`;
}, '');

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현';

// split : 문자 -> 배열
let nameArray = str.split(' ');

// join : 배열 -> 문자
let joinArray = nameArray.join(' / ');
