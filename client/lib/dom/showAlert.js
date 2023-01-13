import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';

export function showAlert(node, text = '에러입니다.', timeout = 1500) {
  if (typeof node === 'string') node = getNode(node);

  node.textContent = text;
  console.log(node.textContent);

  addClass(node, 'is-active');

  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}

// showAlert('.alert', '올바른 정보를 입력해주세요.', 3000);
