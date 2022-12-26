function throttle(fn, t = 500) {
  let timer = null;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        fn();
        timer = null;
      }, t);
    }
  };
}
function debounce(fn, t = 500) {
  let timer = null;
  return () => {
    if (timer) {
      timer = null;
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
      clearTimeout(timer);
      timer = null;
    }, t);
  };
}
