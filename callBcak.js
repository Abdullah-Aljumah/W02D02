function addOne(arr) {
  const newArr = [];
  arr.forEach(function (item, index) {
    newArr.push(item + 1);
  });
  return newArr;
}

function addExclamation(arr) {
  arr.forEach(function (item, index) {
    arr[index] = item + "!";
  });
  return arr;
}

function addOneByMap(arr) {
  arr.map(function (item, index) {
    arr[index] = item + 1;
  });
  return arr;
}

function addQuestion(arr) {
  arr.map(function (item, index) {
    arr[index] = item + "?";
  });
  return arr;
}

function forLoopTwoToThe(arr) {
  arr.forEach(function (item, index) {
    arr[index] = 2 ** item;
  });
  return arr;
}

function typeNum(arr) {
  const newArr = arr.filter(function (item, index) {
    return typeof item == "number";
  });
  return newArr;
}

function containsAnd(arr) {
  const newArr = arr.filter(function (item, index) {
    return item.includes("and");
  });
  return newArr;
}

function oddValues(arr) {
  const newArr = arr.filter(function (item, index) {
    return item % 2 != 0;
  });
  return newArr;
}

function addValues(arr) {
  const sum = arr.reduce(function (acc, item, index) {
    return (acc += item);
  });
  return sum;
}

function countNumberOfElements(arr) {
  const newArr = arr.reduce(function (acc) {
    acc++;
    return acc;
  }, 0);
  return newArr;
}

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
