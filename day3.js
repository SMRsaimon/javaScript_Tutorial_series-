const radius = [3, 4, 6, 7];


const calculateArea = (radius) => {
  const outPut = [];

  for (let i = 0; i < radius.length; i++) {
    outPut.push(Math.PI * radius[i] * radius[i]);
  }

  return outPut;
};

// console.log(calculateArea(radius))


let  myArray=[]

 myArray.push(10)



// console.log(myArray,"hh")


const object={}



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

const value=myarray[i]
// console.log(myarray[1])

const name=10;


const foods=["apple", "mango","banana"]

// console.log(foods.length)

const indexValue=foods[foods.length-2] 
// console.log(indexValue)

 const indexNumber=foods.indexOf("apple")

  
   
 foods.splice(indexNumber,1)

 console.log(foods)

   






