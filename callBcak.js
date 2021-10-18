// Task One
function addOne(arr) {
  const newArr = [];
  arr.forEach(function (item, index) {
    newArr.push(item + 1);
  });
  return newArr;
}
// End Task One

// Task Two
function addExclamation(arr) {
  arr.forEach(function (item, index) {
    arr[index] = item + "!";
  });
  return arr;
}
// End Task Two

// Task Three
function addOneByMap(arr) {
  arr.map(function (item, index) {
    arr[index] = item + 1;
  });
  return arr;
}
// End Task Three

// Task Four
function addQuestion(arr) {
  arr.map(function (item, index) {
    arr[index] = item + "?";
  });
  return arr;
}
// End Task Four

// Task Five
function forLoopTwoToThe(arr) {
  arr.forEach(function (item, index) {
    arr[index] = 2 ** item;
  });
  return arr;
}
// End Task Five

// Task Six
function typeNum(arr) {
  const newArr = arr.filter(function (item, index) {
    return typeof item == "number";
  });
  return newArr;
}
// End Task Six

// Task Se7en
function containsAnd(arr) {
  const newArr = arr.filter(function (item, index) {
    return item.includes("and");
  });
  return newArr;
}
// End Task Se7en

// Task Eight
function oddValues(arr) {
  const newArr = arr.filter(function (item, index) {
    return item % 2 != 0;
  });
  return newArr;
}
// End Task Eight

// Task Nine
function addValues(arr) {
  const sum = arr.reduce(function (acc, item, index) {
    return (acc += item);
  });
  return sum;
}
// End Task Nine

// Task Ten
function countNumberOfElements(arr) {
  const newArr = arr.reduce(function (acc) {
    acc++;
    return acc;
  }, 0);
  return newArr;
}
// End Task Ten

//**************************  Extra ***********************************

// Extra One
const items = [
  {
    item: "switch",
    purchasePrice: 400,
  },
  {
    item: "nike",
    purchasePrice: 150,
  },
];

function addPurchases(arr) {
  const newArr = arr.reduce(function (acc, item) {
    return (acc += item.purchasePrice);
  }, 0);
  return newArr;
}
// End Extra One

// Extra Two
function sortNumbers(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr;
}
// End Extra Two

// Extra Three
function sortBackwards(arr) {
  arr.sort((a, b) => {
    return b - a;
  });
  return arr;
}
// End Extra Three
