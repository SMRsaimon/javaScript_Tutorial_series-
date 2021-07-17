const radius = [3, 4, 6, 7];

const calculateArea = (radius) => {
  const outPut = [];

  for (let i = 0; i < radius.length; i++) {
    outPut.push(Math.PI * radius[i] * radius[i]);
  }

  return outPut;
};

// console.log(calculateArea(radius))

let myArray = [];

myArray.push(10);

// console.log(myArray,"hh")

const object = {};

// Index number
// .indexOf
// .length
// .push()
// .pop()

const myarray = [2, 3];
myarray.push(12);
myarray.pop();
myarray.unshift(13);
myarray.shift();

const i = 1;

const value = myarray[i];
// console.log(myarray[1])

const name = 10;

const foods = ["apple", "mango", "banana", "apple"];

// console.log(foods.length)

const indexValue = foods[foods.length - 2];
// console.log(indexValue)

const indexNumber = foods.indexOf("apple");

foods.splice(indexNumber, 1);

console.log(foods);

const food = [
  {
    name: "My Name is something ",
    age: 16,
    class: 6,
    id: 1,
  },
  {
    name: "My Name is something ",
    age: 16,
    class: 6,
    id: 2,
  },
  {
    name: "My Name is something ",
    age: 16,
    class: 5,
    id: 3,
  },
];
  
 const myNewArray= food.filter(x=>x.class===6)
 console.log(myNewArray)
 const myNewArray2= food.find(x=>x.id===3)
 console.log(myNewArray2)



