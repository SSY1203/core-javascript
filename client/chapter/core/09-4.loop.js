/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

// const obj = new Object();

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  hasOwnProperty: function () {
    return '헤헤';
  },
};

let key = 'standardName';

// console.log(key in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// console.log(javaScript.hasOwnProperty(key));
Object.prototype.nickName = 'tiger';

// 객체 자신(own)의 속성(property)인지 확인(has)하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

for (let key in javaScript) {
  /* Object 프로토타입 안에 포함된 hasOwnProperty를 부르는데 javaScript라는 객체 안에 key를 호출 */
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
