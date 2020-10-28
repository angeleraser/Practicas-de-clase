Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Only change code below this line
  for (let item of this) {
    newArray.push(callback(item));
  }
  // Only change code above this line
  return newArray;
};

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  var newArray = [];
  for (let item of this) {
    if (callback(item)) {
      newArray.push(item);
    }
  }
  // Only change code above this line
  return newArray;
};
const API = async () => {
  return {
    url: "https://facebook.com/angeleraser",
  };
};
const myAsyncFuntion = async () => {
  const { url } = await API();
  return url;
};
myAsyncFuntion().then(console.log);
