const checkServer = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => resolve(`Estado del Servidor: ${response.status === 200 ? "OK" : "NOT OK"}`))
      .catch(() => reject(`Error al localizar URL`));
  });
}

checkServer(document.URL.toString())
  .then(result => console.log(result))
  .catch(e => console.log(e));
const delay = time => new Promise(resolveCallback => setTimeout(resolveCallback, time));

delay(3000)
  .then(() => console.log(`Este es un retardo de al menos 3 segundos`));
// LLamada asíncrona con callback puro.
setTimeout(() => console.log("1"), 0);

// LLamada asíncrona con promesa.
Promise.resolve().then(() => console.log("2"));

function* famousNames() {
  console.log(`Devuelvo "Luke"`);
  let received = yield "Luke";
  console.log(`Recibo "${received}" y devuelvo "Homer"`);
  received = yield "Homer";
  console.log(`Recibo "${received}" y devuelvo "Bugs"`);
  received = yield "Bugs";
  console.log(`Recibo "${received}"`)
}

const generator = famousNames();
let returned = generator.next();
returned = generator.next(`${returned.value} Skywalker`);
returned = generator.next(`${returned.value} Simpson`);
returned = generator.next(`${returned.value} Bunny`);
generator.next();

// Devuelvo "Luke"
// Recibo "Luke Skywalker" y devuelvo "Homer"
// Recibo "Homer Simpson" y devuelvo "Bugs"
// Recibo "Bugs Bunny

function watchTutorialPromise() {
  let userLeft = false
  let userWatchingCatMeme = false
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat'
      })
    } else {
      resolve('Thumbs up and Subscribe')
    }
  })
}

watchTutorialCallback(message => {
  console.log(message)
}, error => {
  console.log(error.name + ' ' + error.message)
})

watchTutorialPromise().then(message => {
  console.log(message)
}).catch(error => {
  console.log(error.name + ' ' + error.message)
})

const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(messages => {
  console.log(messages)
})

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(message => {
  console.log(message)
})