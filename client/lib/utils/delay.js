import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';

const first = getNode('.first');
const second = getNode('.second');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';

/* 
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    delay(()=>{
      first.style.top = '0px';
    })
    first.style.transform = 'rotate(360deg)';
  })
})
 */

// delayP()
//   .then(() => {
//     first.style.top = '-100px';
//     return delayP();
//   })
//   .then(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.left = '100px';
//     return delayP();
//   })
//   .then(() => {
//     first.style.top = '0px';
//     second.style.left = '0px';
//   });

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

function delayP(options = {}) {
  let config = { ...defaultOptions };

  // 객체 합성 mixin
  config = { ...config, ...options };

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => (!shouldReject ? resolve(data) : reject(errorMessage)), timeout);
  });
}

delayP({
  timeout: 1500,
  data: '성공입니다~~',
})
  .then(res => console.log(res))
  .catch(err => console.log(err));
