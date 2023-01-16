import {
  getNode,
  diceAnimation,
  disableElement,
  enableElement,
  getNodes,
  invisibleElement,
  visibleElement,
  insertLast,
  sum,
  attr,
  memo,
  clearContents,
} from './lib/index.js';

// 배열의 구조 분해 할당

const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

let diceCount = 0;
let diceSum = 0;

function renderRecordListItem() {
  const diceValue = attr(memo('cube'), 'data-dice');

  let template = /* html */ `
  <tr>
  <td>${++diceCount}</td>
  <td>${diceValue}</td>
  <td>${(diceSum = sum(diceSum, diceValue))}</td>
  </tr>
  `;

  insertLast('.recordList tbody', template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}

/* --------------------------------------------------------------- */
/* event                                                           */
/* --------------------------------------------------------------- */

const handleRollingDice = (() => {
  let isRolling = false;
  let stopAnimation;
  return () => {
    if (!isRolling) {
      // console.log('첫번째 클릭');
      stopAnimation = setInterval(diceAnimation, 100);

      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      // console.log('두번째 클릭');
      clearInterval(stopAnimation);

      enableElement(recordButton);
      enableElement(resetButton);
    }

    isRolling = !isRolling;
  };
})();

const handlerRecord = () => {
  visibleElement(recordListWrapper);

  renderRecordListItem();
};

const handlerReset = () => {
  diceCount = 0;
  diceSum = 0;
  invisibleElement(recordListWrapper);
  clearContents(' .recordListWrapper tbody');
};

rollingDiceButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handlerRecord);
resetButton.addEventListener('click', handlerReset);
// let eventOff = bindEvent(rollingDiceButton,'click',handlerRollingDice);
