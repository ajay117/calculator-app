import { add, subtract, multiply, divide } from "./calculate.js";

let calculatorObj = {
  num1: "",
  num2: "",
  numbers: Array.from(document.querySelectorAll(".num")),
  operators: Array.from(document.querySelectorAll(".operator")),
  resetBtn: document.querySelector(".btn__reset"),
  deleteBtn: document.querySelector(".btn__delete"),
  perform: "",
};

const performFunction = (name) => {
  let calculatorScreen = document.querySelector(".calculator__screen");
  calculatorObj.num1 = "" + name(calculatorObj.num1, calculatorObj.num2);
  calculatorObj.num2 = "";
  calculatorScreen.textContent = calculatorObj.num1;
};

calculatorObj.numbers.forEach((num) => {
  num.addEventListener("click", () => {
    let calculatorScreen = document.querySelector(".calculator__screen");
    if (!calculatorObj.perform) {
      calculatorObj.num1 += num.textContent;
      calculatorScreen.textContent = calculatorObj.num1;
    } else {
      calculatorObj.num2 += num.textContent;
      calculatorScreen.textContent = calculatorObj.num2;
    }
  });
});

calculatorObj.operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (calculatorObj.perform && calculatorObj.num1 && calculatorObj.num2) {
      if (calculatorObj.perform === "Addition") {
        performFunction(add);
      }

      if (calculatorObj.perform === "Subtraction") {
        performFunction(subtract);
      }

      if (calculatorObj.perform === "Multiplication") {
        performFunction(multiply);
      }

      if (calculatorObj.perform === "Division") {
        performFunction(divide);
      }
    }

    if (calculatorObj.num1) {
      if (operator.textContent === "+") {
        calculatorObj.perform = "Addition";
      } else if (operator.textContent === "-") {
        calculatorObj.perform = "Subtraction";
      } else if (operator.textContent === "×") {
        calculatorObj.perform = "Multiplication";
      } else if (operator.textContent === "/") {
        calculatorObj.perform = "Division";
      }
    }
  });
});

calculatorObj.resetBtn.addEventListener("click", () => {
  let calculatorScreen = document.querySelector(".calculator__screen");
  calculatorObj.num1 = "";
  calculatorObj.num2 = "";
  calculatorObj.perform = "";
  calculatorScreen.textContent = "0";
});

calculatorObj.deleteBtn.addEventListener("click", () => {
  if (!calculatorObj.num2) {
    let calculatorScreen = document.querySelector(".calculator__screen");
    calculatorObj.perform = "";
    calculatorObj.num1 = calculatorObj.num1.slice(0, -1);
    calculatorScreen.textContent = calculatorObj.num1 || 0;
  } else {
    let calculatorScreen = document.querySelector(".calculator__screen");
    calculatorObj.num2 = calculatorObj.num2.slice(0, -1);
    calculatorScreen.textContent = calculatorObj.num2 || 0;
  }
});
