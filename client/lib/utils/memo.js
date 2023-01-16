export const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if (!callback) return cache[key];

    if (cache[key]) {
      console.warn(`${key} 값은 이미 존재합니다.`);
      return;
    }

    cache[key] = callback();
  };
})();
