
// Day 4 array find and filter 




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
