function getNode(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인자는 문자 타입이여야 한다.');
  }
  let result = document.querySelector(node);
  return result;
}

function getNodes(node) {
  if (typeof node !== 'string') {
    throw new Error('getNodes 함수의 인자는 문자 타입이여야 한다.');
  }
  let result = document.querySelectorAll(node);
  return result;
}
