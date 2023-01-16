import { isNumber } from './../utils/typeOf.js';
export function sum(valueA, valueB) {
  if (!isNumber(valueA) || !isNumber(valueB)) {
    valueA = Number(valueA);
    valueB = Number(valueB);
  }
  return valueA + valueB;
}
