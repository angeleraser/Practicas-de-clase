'use strict'

function claseDeArrays() {
  // Arrays 21/1/2020
  // Metodos de las arrays
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(arr.length);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  // indexOf devuelve el indice de un elemento en el array
  console.log(arr.indexOf(1));

  // AGREGAR ELEMENTOS A UN ARRAY
  // .push(a,b,c) añade al final
  arr.push(11, 12, 13);
  console.log(arr);

  // .unshift(a,b,c) añade al principio y devuelve el nuevo length del array
  let newL = arr.unshift(0);
  console.log(newL);

  // ELIMINAR UN SOLO ELEMENTO DEL ARRAY
  // .pop() al final y devuelve el elemento 
  let deleted_el = arr.pop();
  console.log(deleted_el);

  // .shift() al principio y devuelve el elemento
  deleted_el = arr.shift();
  console.log(deleted_el);

  // .join() transformar un array en string 
  console.log(arr.join());

  // .splice(indice,a,items) añade o quita elementos 
  arr.splice(1, 3, 'value')
  console.log(arr);

  // .slice() crea una copia del array independiente
  let arr_slice = arr.slice(1, 6);
  console.log(arr_slice);

  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // devuelve el primer valor que cumpla con la condicion del callback
  let num = arr.find(el => el > 3);
  console.log(num);

  // devuelve el indice del primer valor que sea mayor que 3 en la array
  let numIndex = arr.findIndex(el => el > 3);
  console.log(numIndex);

  // Los iteradores
  // Son objetos que contienen un metodo .next()
  // Devuelve un elemento de un objeto o array con dos propiedades(value,done)
  // y recuerda la posicion anterior en la ejecucion anterior 
  // .keys(), .values(),.entries()
  let iterador = arr.keys();
  console.log('Para .keys()')
  console.log(iterador.next());

  iterador = arr.values();
  console.log('Para .values()')
  console.log(iterador.next());

  iterador = arr.entries();
  console.log('Para .entries()');
  console.log(iterador.next());

  // Metodos para recorrer arrays
  // .map() permite mapear y crear un nuevo array y hacer un cambio a cada elemento del array original
  // .filter() permite filtrar y crear un nuevo array y hacer un cambio a cada elemento del array original
  // .reduce() de todos los elementos hace operaciones y devuelve un solo valor
  const object1 = {
    name: `Objeto 1`,
    valor: 8
  }
  // Creando un objeto con parametros iguales
  const object2 = Object.assign({}, object1, {
    name: `Objeto 2`
  }, {
    valor: 10
  });
  const object3 = Object.assign({}, object1, {
    name: `Objeto 3`
  }, {
    valor: 4
  });
  // un array con los dos objetos 
  const arr2 = [
    object1,
    object2,
    object3
  ];
  // el array con 3 objetos 
  console.log(arr2[0], arr2[1], arr2[2]);
  console.log(...arr2);
  // .map()
  // Transforma cada elemento del array segun el callback (funcion)
  // nuevo array con los name del arr2 con el ciclo for
  let objectsName = [];
  for (let i = 0; i < arr2.length; i++) {
    objectsName.push(arr2[i].name);
  };
  // nuevo array con los name del arr2 con el metodo .map()
  objectsName = arr2.map((objName) => objName.name);
  console.log(objectsName);

  // .filter()
  let objectsValue = [];
  // con el ciclo for creando un nuevo array con los valores de arr2   
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].valor >= 5) {
      objectsValue.push(arr2[i]);
    }
  };
  // nuevo array con los name del arr2 con el metodo .filter()
  objectsValue = arr2.filter(objValue => objValue.valor >= 5);
  console.log(objectsValue);
  let valuesMax = objectsValue.map(objName => objName.name)
  console.log(valuesMax);

  // .reduce()
  // devuelve un solo valor
  // sintaxis array.reduce(cb(prev,current[,i,arr])[,inital])
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let suma = numbers.reduce((a, b) => a + b);
  console.log(`La suma de todos los valores del array es ${suma}`);
  let max = numbers.reduce((a, b) =>
    // condicion devolver el numero mayor 
    a > b ? a : b);
  console.log(`Numero mas grande = ${max}`);

  // Sacar el promedio del array usando todos los parametros del metodo
  let media = numbers.reduce((a, b, i, arr) => {
    // Sumar el elemnto actual con el anterior guardando el valor 
    b += a;
    // dectectar cuando se termina de recorrer 
    return (i == arr.length - 1 ? b / arr.length : b);
  });
  console.log(`El promedio es ${media}`);
  // Buscando el objeto con valor mas alto 
  let valorMax = arr2.reduce((a, b) => {
    // retornamos un objeto 
    if (a.valor > b.valor)
      return {
        name: a.name,
        valor: a.valor
      }
    else {
      return {
        name: b.name,
        valor: b.valor
      }
    }
  });
  console.log(valorMax);
  // ...REST operator condense multiple elements into an array 
  function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
      return multiplier * element;
    });
  };
  let restOperatorArray = multiply(2,
    // theArgs 
    2, 3, 4, 5);
  console.log(restOperatorArray);
  // SPREAD operator 
  const arr3 = ['Hello', 'World'],
    arr4 = ['Im', 'Dev', 'Web'],
    arr3_4 = [...arr3, ...arr4];
  console.log(arr3);
  console.log(arr4);
  console.log('Spread operator:', arr3_4.join(' '));
};

function claseDeObjetos() {
  // Objetos - 22/1/2020
  //  Operadores de objetos
  // -delete -> elimina una propiedad del objeto 
  // -in -> devuelve true si la propiedad existe en el objeto mismo o en la cadena de prototipos

  const edad = 21;
  const angel = {
    nombre: `Angel Figuera`,
    edad,
    ocupacion: `estudiante`,
    hobby: `programacion y juegos`,
    pais: `Venezuela`,
    genero: `masculino`,
    saludar() {
      setInterval(() => {
        console.log(`Hola, me llamo ${this.nombre}`);
      }, 2500)
    },
    trabajando() {
      console.log(`Estoy trabajando`)
    },
  };
  // Añadiendo una propiedad
  angel.estadoCivil = `soltero`;
  // Borrando el metodo trabajando  -delete objeto.propiedad-
  delete angel.trabajando;
  console.log(angel);
  //Verificando la existencia de una propiedad en el objeto o en la cadena de prototipos -`propiedad` in objeto- return true or false
  console.log(`estadoCivil` in angel);
  // Verificar si la propiedad esta en el propio objeto 
  console.log(angel.hasOwnProperty(`saludar`));
  // Crear una copia independiente del objeto
  const angel2 = Object.assign({}, angel);
  // Lexical .this
  angel.saludar
  // Constructor 
  class Person {
    constructor(name, surname, country)
    // aqui van las propiedades y valores 
    {
      this.name = name;
      this.surname = surname;
      this.country = country;
      this.fullName = ` ${name} ${surname}`;
    }
    // metodos aqui 
    sayHello() {
      console.log(`Hi, im ${this.fullName} from ${this.country}`);
    };
    // metodo estatico 
    static sayHi(person, person2) {
      console.log(`Hello, im ${person.name},my friend is ${person2.name} and he is ${person2.matter}`)
    };
  };
  // Instancia 
  const my_info = ['Angel', 'Figuera', 'Venezuela', 21, 'JavaScript']
  const me = new Person(...my_info);
  console.log(me)
  me.sayHello();
  // Crear sub-clase que herede de la anterior 
  class Student extends Person {
    constructor(name, surname, country, age, matter) {
      super(name, surname, country);
      this.age = age;
      this.matter = matter;
    };
    info() {
      console.log(`
    -${this.fullName}.
    -Country: ${this.country}.
    -Age: ${this.age}.
    -Class: ${this.matter}.`);
    };
  };
  const angel_student = new Student(...my_info);
  console.log(angel_student);
  // metodo del padre 
  angel_student.sayHello();
  // metodo propio 
  angel_student.info();

}

function claseDeLoops() {
  // bucle for 
  const objects = ["objeto1", "objeto2", "objeto3", "objeto4", "objeto5"];
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].indexOf('o') == 0) {
      // continue
      // break
    }
    console.log(objects[i]);
  }
  // bucle while 
  let i = 10;
  while (i--) {
    console.log(i)
  }
  // bucle do while 
  let x = 10;
  do {
    x--
    console.log(x)
  } while (x > 0);
  // bucle for of
  // Uso recomendado para recorrer arrays
  for (let name of objects) {
    console.log(name)
  }
};

function claseDeFunciones() {
  // Las funciones son bloques de codigo reutilizables
  // Clases 
  class Pais {
    constructor(name, coin) {
      this.nombre = name;
      this.moneda = coin;
    }
  }
  let ven = new Pais('Venezuela', 'Bolivar Soberano');
  console.log(ven);
  // apply() and call() to call functions
  function add(a, b, c) {
    return a + b + c
  };
  // ARRAY 
  const arr = [1, 2, 3];
  // apply() 
  let myAdd = add.apply(undefined, arr);
  console.log('apply()', myAdd);
  // spread operator ES6 
  myAdd = add(...arr);
  console.log('...Spread operator', myAdd)
  // call() 
  myAdd = add.call(undefined, 1, 2, 4)
  console.log('call()', myAdd);

  let example = function (a, b, c) {
    // devuelve un objeto llamado arguments con los parametros pasados en la funcion 
    // transformar los argumentos en un array con los corchetes 
    return [...arguments];
  };
  console.log(example(1, 2, 3));
  // CLOSURES 
  function outer(...numbers) {
    let outer_value = numbers;
    console.log(outer_value)
    return function inter() {
      return outer_value.reduce((a, b) => a + b)
    }
  };
  let addOuter = outer(...arr, 4, 5),
    addInter = addOuter();
  console.log(addInter);
  // funcion que suma todos los parametros sin importar la cantidad 
  function sumarTodos(...args) {
    console.log(args)
    return args.reduce((a, b) => a + b);
  }
  let suma = sumarTodos(1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 5, 6);
  console.log(suma);
};
let today = new Date();
const formatedDate = () => {
  return `${getDayString(today)} ${today.getDate()} de ${getMonthString(today)} de ${today.getFullYear()} ${getAM$PMHour(today)}`
}
const getDayString = (date) => {
  const DAYS = ['Lunes', 'Martes', 'Miecoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  return DAYS[date.getDay()];
}
const getMonthString = (date) => {
  const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiempre', 'Octubre', 'Noviembre', 'Diciembre'];
  return MONTHS[date.getMonth()];
}
const getAM$PMHour = (date) => {
  let hours = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours();
  let minutes = date.getMinutes();
  const AM_PM = hours >= 12 ? 'pm' : 'am';
  const hourLeadinZero = hours < 10 ? '0' : '';
  return `${hourLeadinZero}${hours}:${minutes} ${AM_PM}`
}
const setCustomIterator = (obj) => {
  Object.defineProperty(obj, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function () {
      const o = this;
      let idx = 0;
      let ks = Object.keys(o);
      return {
        next: () => {
          return {
            value: o[ks[idx++]],
            done: (idx > ks.length)
          }
        }
      }
    }
  })
  return obj;
}
const msToDateObj = (ms) => {
  let seconds = (ms / 1000)
  let min = (seconds / 60)
  let hr = (min / 60)
  let days = (hr / 24)
  let weeks = (days / 7)
  let month = (days / 30)
  let years = (days / 365)

  let obj = {
    seconds,
    min,
    hr,
    days,
    weeks,
    month,
    years
  }
  obj = setCustomIterator(obj)
  return obj
}
let myDate = new Date('10/09/1998 10:30:40');
const myFullAge = today - myDate;
let myObj = msToDateObj(myFullAge);
let arr = [1, 2, 3, 4, 5];
Object.defineProperty(myObj, 'Pais', {
  enumerable: true,
  value: 'Venezuela',
});
Object.prototype.num = 2;

// Delegacion 
const Task = {
  setID: function (ID) {
    this.id = ID;
  },
  outputID: function () {
    console.log(this.id);
  }
}
const task1 = Object.create(Task);
task1.prepareTask = function (ID, Label) {
  // se encuentra en la cadena de prototipos por la delegacion
  this.setID(ID);
  this.label = Label;
};
task1.outputTaskDetails = function () {
  this.outputID();
  console.log(this.label)
}

function ageTag(strings, name, age) {
  let str0 = strings[1];
  let adjective = age > 50 ? 'old' : 'young';
  return `${name}${str0}${adjective}`;
}
let person = 'Mike';
let age = 28;
let output = ageTag ` is${person} is ${age} is`;

const fistLastLetterMatch = /^([aeiou]).+\1$/;

// ^             #  Represents beginning of a line.
// [a-z]         #  Alphabetic character.
// .*            #  Any character 0 or more times.
// [a-z]         #  Alphabetic character.
// $             #  End of a line.
// i             #  Case-insensitive match.
// g             #  Global.
// m             #  Multiline
// INHITERANCE Classes
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}
// Define method on prototype 
Rectangle.prototype.getArea = function () {
  return this.w * (this.h ? this.h : this.w);
}
let rectangle = new Rectangle(2, 4);
class Square extends Rectangle {
  constructor(w) {
    super(w)
  }
}
let squere = new Square(4);
const btn1 = {
  buttonElement: document.querySelector('#btn'),
  count: 0,
  clickEvent() {
    this.buttonElement.addEventListener('click', () => {
      this.count += 1;
      this.renderCount();
    })
  },
  renderCount() {
    this.buttonElement.innerText = this.count;
  }
}

function Bird(name) {
  this.name = name; //own property
}
Bird.prototype.numLegs = 2; // prototype property
let duck = new Bird("Donald");
let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let prop in duck) {
  if (duck.hasOwnProperty(prop)) {
    ownProps.push(prop)
  } else {
    prototypeProps.push(prop)
  }
}

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!')
};
// Only change code above this line

let beagle = new Dog();
(function () {
  console.log("Chirp, chirp!");
})();
let isCuteMixin = function (obj) {
  obj.isCute = function () {
    return true;
  };
};
let singMixin = function (obj) {
  obj.sing = function () {
    console.log("Singing to an awesome tune");
  };
};
const funModule = (function () {
  return {
    isCuteMixin,
    singMixin
  }
})()

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
const userFunctionStore = {
  increment: function () {
    this.score += 1;
  },
  login: function () {
    console.log(this.name)
  }
}
userFunctionStore.login
const userOne = userCreator('Will',6);
userOne.increment();
userOne.login();