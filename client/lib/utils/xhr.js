/* readyState
0: uninitalized // 초기화
1: loading      // 로딩
2: loaded       // 로딩이 완료됨
3:interative    // 인터렉티브
4:complete      // 완료
 */

export const xhrData = ({
  url = '',
  method = 'GET',
  body = 'null',
  onSuccess = null,
  onFail = null,
  headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
}) => {
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  //   console.log(Object.entries(headers));

  //   Object.entries(headers).forEach(([key, value]) => {
  //     xhr.setRequestHeader(key, value);
  //   });

  // 변경이 될 때마다 호출
  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr; // 객체 구조 분해 할당
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        // console.log('통신 성공');
        onSuccess(JSON.parse(response));
      }
    } else {
      onFail('통신 실패');
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body));
};

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'POST',
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

// xhrData.delete(
//   'https://jsonplaceholder.typicode.com/users/ 1',
//   res => {
//     console.log(res);
//   },
//   err => {
//     console.log(err);
//   },
// );

// console.dir(xhrData);
