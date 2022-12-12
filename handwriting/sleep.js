function sleep(fn) {
  new Promise((res, rej) => {
    setTimeout(() => {
      res(fn);
    }, 3000);
  }).then((fn) => {
    fn();
  });
}
sleep(() => {
  console.log("hello");
});
