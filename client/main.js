import {
  getNode,
  diceAnimation,
  disableElement,
  enableElement,
  getNodes,
  invisibleElement,
  visibleElement,
} from './lib/index.js';

// 배열의 구조 분해 할당

const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

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
};

const handlerReset = () => {
  invisibleElement(recordListWrapper);
};

rollingDiceButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handlerRecord);
resetButton.addEventListener('click', handlerReset);
// let eventOff = bindEvent(rollingDiceButton,'click',handlerRollingDice);
