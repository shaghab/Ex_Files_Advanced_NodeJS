var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(() => {
      resolves("the long delay has ended");
    }, seconds * 1000);
  });

delay(1).then(console.log);

console.log("end first tick");
