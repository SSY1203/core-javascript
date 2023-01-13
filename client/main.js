/* eslint no-undef: 'off' */
/* eslint no-unused-vars: 'off' */

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const doneButton = getNode('#done');
const result = getNode('.result');

const clearContents = node => {
  if (typeof node === 'string') node = getNode(node);
  node.textContent = '';
};

const getInputVaule = node => {
  if (typeof node === 'string') node = getNode(node);
  if (node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용됩니다.');
  return +node.value;
};

const sum = (valueA, valueB) => valueA + valueB;

const handler = e => {
  e.preventDefault();

  let firstNumber = getInputVaule(first);
  let secondNumber = getInputVaule(second);
  let total = sum(firstNumber, secondNumber);

  clearContents(result);

  insertLast(result, total);
};

const inputHandler = () => {
  let firstNumber = getInputVaule(first);
  let secondNumber = getInputVaule(second);
  let total = sum(firstNumber, secondNumber);

  clearContents(result);

  insertLast(result, total);
};

doneButton.addEventListener('click', handler);

first.addEventListener('change', inputHandler);
second.addEventListener('change', inputHandler);
