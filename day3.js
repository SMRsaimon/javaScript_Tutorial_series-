const radius = [3, 4, 6, 7];


const calculateArea = (radius) => {
  const outPut = [];

  for (let i = 0; i < radius.length; i++) {
    outPut.push(Math.PI * radius[i] * radius[i]);
  }

  return outPut;
};


console.log(calculateArea(radius))

// Index number 
// .indexOf
// .length

// .push()
// .pop()

const myarray=[2,3]

myarray.push(12)
myarray.pop()

myarray.unshift(13)
myarray.shift()


const i=1
console.log(myarray[i])

const name=10;





