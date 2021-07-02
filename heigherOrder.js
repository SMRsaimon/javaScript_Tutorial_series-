// Prectices heigher function

const radius = [3, 4, 6, 7];

// calculate curcle area
const calculateArea = (radius) => {
  const outPut = [];

  for (let i = 0; i < radius.length; i++) {
    outPut.push(Math.PI * radius[i] * radius[i]);
  }

  return outPut;
};

console.log(calculateArea(radius));
// calculateCircumference

const calculateCircumference = (radius) => {
  const outPut = [];
  for (let i = 0; i < radius.length; i++) {
    outPut.push(2 * Math.PI * radius[i]);
  }

  return outPut;
};
console.log(calculateCircumference(radius));

// calculate diameter
const calculateDiameter = (radius) => {
  const outPut = [];
  for (let i = 0; i < radius.length; i++) {
    outPut.push(2 * radius[i]);
  }

  return outPut;
};

console.log(calculateDiameter(radius));

// use heigher order function to calculate cercle

const calculateAreaLogic = (radius) => {
  return Math.PI * radius * radius;
};
const calculateCircumferenceLogic = (radius) => {
  return 2 * Math.PI * radius;
};
const calculateDiameterLogic = (radius) => {
  return 2 * radius;
};

// calculate function
const calculate = (radius, logic) => {
  const outPut = [];
  for (let i = 0; i < radius.length; i++) {
    outPut.push(logic(radius[i]));
  }

  return outPut;
};

console.log(calculate(radius, calculateAreaLogic));
console.log(calculate(radius, calculateCircumferenceLogic));
console.log(calculate(radius, calculateDiameterLogic));
