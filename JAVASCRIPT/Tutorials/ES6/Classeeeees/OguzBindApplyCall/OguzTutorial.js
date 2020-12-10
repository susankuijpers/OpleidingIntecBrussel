import "./styles.css";

// Bind

const myObject = {
  name: "Oguz",
  surname: "Karademir",
  age: 27,
  city: "Leuven",
  getSentence: function () {
    const sentence =
      "I am " +
      this.name +
      " " +
      this.surname +
      " and I am " +
      this.age +
      " years old and I live in " +
      this.city;
    return sentence;
  }
};

console.log(myObject);

const readSentence = myObject.getSentence.bind(myObject);

console.log(readSentence());

//Apply and Call

const myApplyObject = {
  number1: 50,
  number2: 30
};

const myCallObject = {
  number1: 30,
  number2: 20
};

function getSum1(num) {
  const sum = this.number1 + this.number2 + num;
  return "The result of addition is " + sum;
}

const resultApply = getSum1.apply(myApplyObject, [100]);

const resultCall = getSum1.call(myCallObject, 100);

document.getElementById("app").innerHTML = readSentence();
document.getElementById("apply").innerHTML = resultApply;
document.getElementById("call").innerHTML = resultCall;
