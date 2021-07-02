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



