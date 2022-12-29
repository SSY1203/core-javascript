/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// let answer = +prompt('숫자를 입력해주세요', 0);
// let result = answer > 0 ? 1 : answer < 0 ? -1 : 0;
// if (answer > 0) {
// console.log(result);
// } else if (answer < 0) {
//   conso3le.log(result);
// } else {
//   console.log(result);
// }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'Yes';

// 영화 볼거니?
let goingToWatchMovie = 'No';

// if 문(statement)
if (didWatchMovie.includes('Yes')) {
  console.log('그 영화 너무 재밌더라!');
  // else if 복수 조건 처리
} else if (goingToWatchMovie === 'Yes') {
  console.log('같이 볼래?');
  // else 절(caluse)
} else {
  console.log('재미 없을 거 같아ㅠ');
}

// 조건부 연산자

// 멀티 조건부 연산자 식
didWatchMovie.includes('Yes')
  ? console.log('그 영화 너무 재밌더라!')
  : goingToWatchMovie === 'Yes'
  ? console.log('같이 볼래?')
  : console.log('재미 없을 거 같아ㅜ');
