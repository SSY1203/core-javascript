/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

const frontEndDev = ['HTML', 'CSS', 'SVG', 'JavaScript', 'jQuery', 'React', 'Redux'];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/* console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]); */

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
/* let i = 0;
while (i < frontEndDev.length) {
  let value = frontEndDev[i];
  console.log(value);
  i++;
} */

// while 문 (역순환 : 역방향)
let j = frontEndDev.length - 1;

while (j >= 0) {
  let value2 = frontEndDev[j];
  console.log(value2);
  j--;
}

// 전개 연산자 전개 구문 spread operator
// let copyArray = [...frontEndDev];

let z1 = performance.now();
let z2 = performance.now();
console.log(z2 - z1);

// let copyArray = frontEndDev.slice();

// while (copyArray.length) {
//   console.log(copyArray.pop());
// }

// 성능 진단 : 순환 vs. 역순환
