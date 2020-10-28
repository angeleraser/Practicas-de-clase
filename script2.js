function TypesAndGrammarYDKJS() {
  typeof undefined === "undefined"; // true
  typeof true === "boolean"; // true
  typeof 42 === "number"; // true
  typeof "42" === "string"; // true
  typeof {
    life: 42
  } === "object"; // true
  // added in ES6!
  typeof Symbol() === "symbol"; // true

  var a = null;
  (!a && typeof a === "object"); // true

  // const DEBUG = true;
  // oops, esto arrojaría un error!
  // if (DEBUG) {
  //   console.log("La depuración está comenzando");
  // }
  // esta es una comprobación de existencia segura
  if (typeof DEBUG !== "undefined") {
    console.log("La depuración está comenzando");
  }

  function doSomethingCool() {
    var helper =
      (typeof FeatureXYZ !== "undefined") ?
      FeatureXYZ :
      function () {
        /*.. característica por defecto ..*/
      };
    var val = helper();
    // ..
  }
  doSomethingCool()

  (function () {
    function FeatureXYZ() {
      /*.. my XYZ feature ..*/
    }
    // include `doSomethingCool(..)`
    function doSomethingCool() {
      var helper =
        (typeof FeatureXYZ !== "undefined") ?
        FeatureXYZ :
        function () {
          /*.. característica por defecto ..*/
        };
      var val = helper();
      // ..
    }
    doSomethingCool();
  })();

  function doSomethingCool(FeatureXYZ) {
    var helper = FeatureXYZ ||
      function () {
        /*.. característica por defecto ..*/
      };
    var val = helper();
    // ..
  }

  function foo() {
    var arr = Array.prototype.slice.call(arguments);
    arr.push("bam");
    console.log(arr);
  }
  foo("bar", "baz"); // ["bar","baz","bam"]
  // sintaxis inválida:
  //42.toFixed(3); // SyntaxError
  // todos estos son válidos:
  (42).toFixed(3); // "42.000"
  0.42.toFixed(3); // "0.420"
  42..toFixed(3); // "42.000"

  function numbersCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON;
  }
  var a = 0.1 + 0.2;
  var b = 0.3;
  numbersCloseEnoughToEqual(a, b); // true
  numbersCloseEnoughToEqual(0.0000001, 0.0000002); // false
  Number.isInteger(42); // true
  Number.isInteger(42.000); // true
  Number.isInteger(42.3); // false
  // Para representarlo en entornos pre ES6:
  if (!Number.isInteger) {
    Number.isInteger = function (num) {
      return typeof num == "number" && num % 1 == 0;
    };
  }
  var a = 42;

  // VOID OPERATOR 
  function noReturnWithVoidOperator(param, cb) {
    return void cb(param)
  }
  const log = (param) => {
    console.log(param);
    return param
  }
  let voidVar = noReturnWithVoidOperator('Im void!', log);
  console.log(voidVar);
  console.log(void setTimeout(() => {
    console.log('time out!')
  }, 1000))
  // Pollyfil de Number.isNaN() 
  if (!Number.isNaN) {
    Number.isNaN = function (n) {
      return (
        typeof n === "number" &&
        window.isNaN(n)
      );
    };
  }
  var a = 2 / "foo";
  var b = "foo";
  Number.isNaN(a); // true
  Number.isNaN(b); // false -- phew!

  // Object.is() 
  console.log('NaN is:', Object.is(NaN, NaN));

  function foo(x) {
    x.push(4);
    x; // [1,2,3,4]
    // luego
    x = [4, 5, 6];
    x.push(7);
    x; // [4,5,6,7]
  }
  var a = [1, 2, 3];
  foo(a);
  a; // [1,2,3,4] not [4,5,6,7]
  var a = new String("abc");
  var b = a + ""; // `b` tiene el valor primitivo desempaquetado de "abc"
  typeof a; // "object"
  typeof b; // "string"

  function modify(myVariable) {
    let modifiedVariable = myVariable; // save arrOne copy reference
    modifiedVariable.push(5); //push to arrOne
    modifiedVariable = [1, 2, 3, 4];
    /* ¡Storage a new reference value
                                       and misses arrOne reference! */
    modifiedVariable.push(5); // push to the new Array!
    return modifiedVariable // a new reference value
  }
  let arrOne = [1, 2, 3, 4];
  let arrTwo = modify(arrOne);
  //right now arrOne = [1,2,3,4,5] and arrTwo = [1,2,3,4,5] but..
  console.log(arrOne, arrTwo);
  console.log(arrOne === arrTwo); //¡false

  var a = Array.apply(null, {
    length: 3
  });
  a; // [ undefined, undefined, undefined ]
  var a = {
    val: [1, 2, 3],
    // probablemente correcto!
    toJSON: function () {
      return this.val.slice(1);
    }
  };
  var b = {
    val: [1, 2, 3],
    // probablemente incorrecto!
    toJSON: function () {
      return "[" +
        this.val.slice(1).join() +
        "]";
    }
  };
  JSON.stringify(a); // "[2,3]"
  JSON.stringify(b); // ""[2,3]"
  var a = {
    valueOf: function () {
      return "42";
    }
  };
  var b = {
    toString: function () {
      return "42";
    }
  };
  var c = [4, 2];
  c.toString = function () {
    return this.join(""); // "42"
  };
  Number(a); // 42
  Number(b); // 42
  Number(c); // 42
  Number(""); // 0
  Number([]); // 0
  Number(["abc"]); // NaN

  let myBooleanA = new Boolean(false);
  let myStringB = new String('');
  let myNumberC = new Number(0);

  // Not bit Operator ~
  // - ( x + 1 ) 
  let myWord = 'Hello';
  let falsyCon = ~myWord.indexOf('tre');
  // if (falsyCon) {
  //   console.log('Found!');

  // } else {
  //   console.log('Not Found!')
  // }

  var a = {
    num: 21,
    toString: function () {
      return String(this.num * 2);
    }
  };
  // Operador unario de negacion !
  var a = "0";
  var b = [];
  var c = {};
  var d = "";
  var e = 0;
  var f = null;
  var g;
  !!a; // true
  !!b; // true
  !!c; // true
  !!d; // false
  !!e; // false
  !!f; // false
  !!g; // false

  var a = [
    1,
    function () {
      /*..*/
    },
    2,
    function () {
      /*..*/
    }
  ];
  JSON.stringify(a); // "[1,null,2,null]"
  JSON.stringify(a, function (key, val) {
    if (typeof val == "function") {
      // obligar a `ToBoolean` a coaccionar la función
      return !!val;
    } else {
      return val;
    }
  });
  // "[1,true,2,true]"

  var a = {
    // Return the primitive value 
    valueOf: function () {
      return 42;
    },
    toString: function () {
      return 4;
    }
  };

  let myArr = [123];
  let number42 = 42;
  myArr.valueOf = function () {
    return 42
  }
  console.log(myArr == number42)

  // console.log(a + ""); // "42" invoca al valueOf
  // console.log(String(a)); // "4" invoca al toString()
  let num = 1;
  num.valueOf()

  var arr1 = [3];
  var arr2 = [1];
  arr1 - arr2; // 2 ---> arr1.toString() - arr2.toString() 

  var a = 42;
  var b = "abc";
  var c = null;
  a || b; // 42
  a && b; // "abc"
  c || b; // "abc"
  c && b; // null

  a || b;
  // más o menos equivalente a:
  a ? a : b;
  a && b;
  // más o menos equivalente a:
  a ? b : a;

  let myStrNumber = '42';
  let myBoolean = true;

  // if (myStrNumber == myBoolean) console.log('What?');
  // 6. Si Type(x) es booleano, devuelve el resultado de la comparación
  // ToNumber(x) == y.
  // 7. Si el Type(y) es booleano, devuelve el resultado de la comparación x ==
  // ToNumber(y).
  var a = "abc";
  var b = Object(a); // igual que `new String( a )`
  a === b; // false
  a == b; // true

  let myNumber = 44;
  let myCoercibleObj = {
    value42: 42,
    value44: 44,
    valueOf() {
      return this;
    },
    toString() {
      return String(this.value44)
    }
  };
  console.log(myCoercibleObj.valueOf());
  let myPersonalArr = [21];
  myPersonalArr.valueOf = function () {
    return this
  }
  myPersonalArr.toString = function () {
    return 42
  }


  var i = 2;
  Number.prototype.valueOf = function () {
    return i++;
  };
  var a = new Number(42);
  if (a == 2 && a == 3) {
    // console.log("Ups, ha ocurrido.");
  }

  "0" == false; // true -- UH OH!
  "0" == NaN; // false
  "0" == 0; // true 
  "0" == ""; // false
  false == null; // false
  false == undefined; // false
  false == NaN; // false
  false == 0; // true -- UH OH!
  false == ""; // true -- UH OH!
  false == []; // true -- UH OH!
  false == {}; // false
  "" == null; // false
  "" == undefined; // false
  "" == NaN; // false
  "" == 0; // true -- UH OH!
  "" == []; // true -- UH OH!
  "" == {}; // false
  0 == null; // false
  0 == undefined; // false
  0 == NaN; // false
  0 == []; // true -- UH OH!
  0 == {}; // false

  var someObj = {
    propName: "John"
  };

  function propPrefix(str) {
    var s = "prop";
    return s + str;
  }
  var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
  // console.log(someObj[someProp]); // "John

  // Setup
  var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: []
    },
    5439: {
      album: "ABBA Gold"
    }
  };

  // Only change code below this line
  function updateRecords(id, prop, value) {
    if (prop == 'tracks') {
      switch (true) {
        case (!collection[id].hasOwnProperty(prop)):
          collection[id][prop] = [];
          if (value) {
            collection[id][prop].push(value);
          }
          break;
        case (collection[id].hasOwnProperty(prop)):
          collection[id][prop].push(value);
          break;
      }
    }
    if (prop != 'tracks' && value) {
      collection[id][prop] = value;
    }
    if (collection[id].hasOwnProperty(prop) && !value) {
      delete collection[id][prop]
    }

    return collection;
  }
  // Setup
  var contacts = [{
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
    },
    {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
    }
  ];


  function lookUpProfile(name, prop) {
    // Only change code below this line
    let person = contacts.find(
      person => person.firstName == name);
    if (person) {
      if (person.hasOwnProperty(prop)) {
        return person[prop]
      } else {
        return 'No such property'
      }
    } else {
      return 'No such contact'
    }
    // Only change code above this line
  }

  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.push(n);
      return countArray;
    }
  }

  function rangeOfNumbers(startNum, endNum) {
    if (endNum >= startNum) {
      const myArr = rangeOfNumbers(startNum, endNum - 1);
      myArr.push(endNum)
      return myArr
    } else {
      return []
    }
  };
  console.log(rangeOfNumbers(1, 10))

  function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS)

    try {
      MATH_CONSTANTS.PI = 99;
    } catch (ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

  // Desctructurig 
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

  const {
    today: highToday,
    tomorrow: highTomorrow
  } = HIGH_TEMPERATURES

  // const LOCAL_FORECAST = {
  //   yesterday: {
  //     low: 61,
  //     high: 75
  //   },
  //   today: {
  //     low: 64,
  //     high: 77
  //   },
  //   tomorrow: {
  //     low: 68,
  //     high: 80
  //   }
  // };

  // const {
  //   today: {
  //     low: lowToday,
  //     high: highToday
  //   }
  // } = LOCAL_FORECAST;
  // const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
  // // 1, 2, 5
  // const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
  // console.log(a, b); // 1, 2
  // console.log(arr); // [3, 4, 5, 7]

  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

  // Only change code below this line
  const half = ({
    max,
    min
  }) => {
    return (max + min) / 2.0
  };

  const createPerson = (name, age, gender) => {
    "use strict";
    return {
      name,
      age,
      gender
    };

  };


  class Thermostat {
    constructor(temperature) {
      this._temperature = temperature;
    }
    get temperature() {
      return (5 / 9) * (this._temperature - 32);
    }
    set temperature(temp) {
      this._temperature = temp;
    }
  }
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
}
// import {
//   uppercaseString,
//   lowercaseString
// } from './functions.js'
// import * as myStringLibrary from './functions.js'

function Foo(name, lastName) {
  this.name = name;
  this.lastName = lastName
}
Foo.prototype.myName = function () {
  return this.name;
};

function Bar(name, last, label) {
  Foo.call(this, name, last);
  this.label = label;
}
Object.setPrototypeOf(Bar.prototype, Foo.prototype);
Bar.prototype.myLabel = function () {
  return this.label;
};
var a = new Bar("a", 'b', "obj a");
a.myName(); // "a"
a.myLabel(); // "obj a"