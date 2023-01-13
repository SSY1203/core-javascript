/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', e => {
  let elem = e.currentTarget;
  // target : 마우스가 처음 만나는 대상(직접적으로 클릭한 대상)
  // currentTarget : 이벤트가 걸린 대상(직접 클릭한 대상이 아닌 이벤트가 걸린 대상)
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  //   console.log(this === e.currentTarget);
  console.log(elem);
  console.log('%c visual', 'background:dodgerblue');

  css('.pop', 'display', 'block');
});

getNode('.pop').addEventListener('click', e => {
  e.stopPropagation();
  css('.pop', 'display', 'none');
});

// news.addEventListener('click', function () {
//   console.log('%c news', 'background:orange');
// });

// desc.addEventListener('click', function (e) {
//   e.stopPropagation();
//   console.log('%c desc', 'background:hotpink');
// });

/* 캡처링 ----------------------------------------------------------------- */
