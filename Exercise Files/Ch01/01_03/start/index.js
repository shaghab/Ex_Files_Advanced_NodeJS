var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    throw new Error("Argh");

    setTimeout(() => {
      resolves("the long delay has ended");
    }, seconds * 1000);
  });

delay(1)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world: ${number}`))
  .catch((error) => console.log(`error: ${error.message}`));

console.log("end first tick");
