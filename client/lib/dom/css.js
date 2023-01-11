function addClass(node, className) {
  if (typeof node !== 'string' || typeof className !== 'string')
    typeError('addClass 함수의 인자는 String이여야 합니다.');
  node = getNode(node);
  node.classList.add(className);
}

function removeClass(node, className) {
  if (!className) {
    node.className = '';
    return;
  }
  if (typeof node !== 'string' || typeof className !== 'string')
    typeError('addClass 함수의 인자는 String이여야 합니다.');
  node = getNode(node);
  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (typeof node !== 'string' || typeof className !== 'string')
    typeError('addClass 함수의 인자는 String이여야 합니다.');
  node = getNode(node);
  node.classList.toggle(className);
}

function getCss(node, prop) {
  if (typeof node !== 'string') typeError('getCss의 첫 번째 인자는 string입니다.');

  if (!(prop in document.body.style))
    syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');

  node = getNode(node);
  return getComputedStyle(node)[prop];
}

function setCss(node, prop, value) {
  if (typeof node !== 'string') typeError('getCss의 첫 번째 인자는 string입니다.');

  if (!(prop in document.body.style))
    syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');

  if (!value) syntaxError('setCss 함수의 세 번째 인자인 value는 필수값입니다.');

  // if (value.replace(/\s+/g, '') === '') {
  // }
  node = getNode(node);
  node.style[prop] = value;
}

const css = (node, prop, value) => (!value ? getCss(node, prop) : setCss(node, prop, value));

// if (!value) return getCss(node, prop);
// else setCss(node, prop, value);
