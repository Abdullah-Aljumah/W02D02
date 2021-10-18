// Task One
const checkValues = (obj, value) => {
  return Object.values(obj).includes(value); // search for match
};
// End Task One

// Task Two
const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};
const getCourseKeys = (obj) => {
  return Object.keys(obj);
};
// End Task Two

//Task Three
const updateNumbers = (obj) => {
  const newArr = [];
  for (const key in obj) {
    newArr.push(`${key}: ${obj[key]}`);
  }
  return newArr;
};
// End Task THree

// Task Four
const PassedOrFailed = (studentGrades) => {
  for (const key in studentGrades) {
    let grade = Object.values(studentGrades[key]);
    grade = grade[0] < grade[1] / 2;
    if (grade == true) {
      return "The student have failed";
    }
  }
  return "The student have passed";
};

// End Task Four

// Task Five

const totalCharacters = (arr) => {
  let counter1 = arr.reduce(function (counter, item) {
    return (counter += item.length);
  }, 0);
  return counter1;
};

// End Task Five 

// Task Six 

const houseSize = (arr) => {
    const sizes = [];
    for (const key in arr) {
        sizes.push(`house : ${arr[key]} members ${arr[key]}`);
    }
    return sizes;
}