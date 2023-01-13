import {
  getInputValue,
  getNode,
  insertLast,
  attr,
  clearContents,
  syntaxError,
  showAlert,
} from './lib/index.js';
import { jujeobData } from './data/data.js';
import { getRandom } from './lib/math/index.js';
import { isNumericString } from './lib/utils/index.js';

const submit = getNode('#submit');
const resultArea = getNode('.result');

// 제출 버튼 핸들러
function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  if (!name) {
    showAlert('.alert-error', '잘못된 정보입니다!', 2000);
    return;
  }
  if (isNumericString(name)) syntaxError('제대로 된 이름을 써주세요.');
  clearContents(resultArea);
  insertLast(resultArea, pick);
}

submit.addEventListener('click', clickSubmitHandler);
