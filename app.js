console.log("server run success");
console.log(2 + 2);
console.log("git success");

function myFunk(quentity) {
  if (quentity <= 10) {
    const price = quentity * 1000;

    return price;
  } else if (10 < quentity && quentity <= 20) {
    const price1 = 1000 * 10;
    const price2 = (quentity - 10) * 800;

    return price1 + price2;
  }
}

const Result = myFunk(15);

console.log(Result);

// prectices heigherOrder function

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

  return outPut
};
console.log(calculateCircumference(radius))

// calculate diameter 
const calculateDiameter=(radius)=>{

  const outPut = [];
  for (let i = 0; i < radius.length; i++) {
    outPut.push(2 *radius[i]);
  }

  return outPut


}

console.log(calculateDiameter(radius))