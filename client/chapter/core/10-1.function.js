/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

/* default parameter */
function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

function calcPrice(priceA, priceB, priceC = getRandomValue(), priceD = getRandomValue()) {
  //validation

  if (!priceA || !priceB) {
    throw new Error('calcPrice 함수의 첫 번째 인수는 필수 입력값 입니다.');
  }
  return priceA + priceB + priceC + priceD;
}

let result = calcPrice(10, 30);

// console.log(result);
// 함수 선언

// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
// let rem;

function rem(pxValue, base = 16) {
  typeof pxValue === 'string' && (pxValue = parseInt(pxValue, 10));

  typeof base === 'string' && (base = parseInt(base, 10));

  //   if (typeof pxValue === 'string') {
  //     pxValue = parseInt(pxValue, 10);
  //   }

  //   if (typeof base === 'string') {
  //     base = parseInt(base, 10);
  //   }

  return `${pxValue / base}rem`;
}

console.assert(rem(20) === '1.25rem');
console.assert(rem('30px') === '1.875rem');
console.assert(rem('56px', 10) === '5.6rem');

// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.

/* 문: 값을 반환 x / 식: 값을 반환 o */

// if 문 if ... { // scope }
// for 문 for ... {}
// while 문 while ... {}
// dowhile 문 do

// 함수선언 문

// let result = condition ? value1 : value2
// let result = value1 || value2
// let result = value1 && value2
