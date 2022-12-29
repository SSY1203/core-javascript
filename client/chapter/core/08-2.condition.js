/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 20;

if (age >= 14 && age <= 90) {
  console.log('14세 이상 90세 이하 입니다.');
}

if (age < 14 || age > 90) {
  console.log('이 나이에 속하지 않습니다.');
}

/* ---------------------------------------------------------------------- */
let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

/* ---------------------------------------------------------------------- */

let userName = prompt('userName을 입력해주세요.', '');
let pw;

if (userName.localeCompare('Admin')) {
  pw = prompt('password를 입력해주세요.', '');
  if (pw.localeCompare('TheMaster')) {
    console.log('welcome!');
  } else if (pw === '' || pw === null) {
    console.log('Canceled ');
  } else {
    console.log('Wrong password.');
  }
} else if (userName === ' ' || userName === null) {
  console.log('Canceled');
} else {
  console.log("I don't know who you are.");
}
