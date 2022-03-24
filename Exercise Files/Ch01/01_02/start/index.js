var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(resolves, seconds * 1000);
  });

delay(1).then(() => console.log("the delay has endede"));

console.log("end first tick");
