/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// String()
// number -> '2022'
const YEAR = 2022;

console.log(typeof String(YEAR));

// undefined -> 'undefined'
// null -> 'null'
let days = null;

console.log(String(undefined));
console.log(String(days));

// boolean -> 'true'
let isKind = true;

console.log(String(isKind));
console.log(isKind + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */
// Number()
// undeinfed -> NaN
console.log(Number(undefined));

// null -> 0
console.log(Number(null));

// boolean
let curie = true;
console.log(curie * 1); /* 1 */
console.log(Number(false)); /* 0 */

// string
console.log(Number('abc')); /* NaN */
console.log(Number('123')); /* 123 */
console.log(Number('a21')); /* NaN */

// numeric string
let width = '320px';

console.log(parseInt(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(' '));
console.log(Boolean(''));
