import { add, subtract, multiply, divide } from "./calculate.js";
let num1 = "";
let num2 = "";
let perform;

let numbers = Array.from(document.querySelectorAll(".num"));
let operators = Array.from(document.querySelectorAll(".operator"));
let resetBtn = document.querySelector(".btn__reset");
let deleteBtn = document.querySelector(".btn__delete");

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    let calculatorScreen = document.querySelector(".calculator__screen");
    if (!perform) {
      num1 += num.textContent;
      calculatorScreen.textContent = num1;
    } else {
      num2 += num.textContent;
      calculatorScreen.textContent = num2;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (perform && num1 && num2) {
      if (perform === "Addition") {
        let calculatorScreen = document.querySelector(".calculator__screen");
        num1 = "" + add(num1, num2);
        num2 = "";
        calculatorScreen.textContent = num1;
      }

      if (perform === "Subtraction") {
        let calculatorScreen = document.querySelector(".calculator__screen");
        num1 = "" + subtract(num1, num2);
        num2 = "";
        calculatorScreen.textContent = num1;
      }

      if (perform === "Multiplication") {
        let calculatorScreen = document.querySelector(".calculator__screen");
        num1 = "" + multiply(num1, num2);
        num2 = "";
        calculatorScreen.textContent = num1;
      }

      if (perform === "Division") {
        let calculatorScreen = document.querySelector(".calculator__screen");
        num1 = "" + divide(num1, num2);
        num2 = "";
        calculatorScreen.textContent = num1;
      }
    }

    if (num1) {
      if (operator.textContent === "+") {
        perform = "Addition";
      } else if (operator.textContent === "-") {
        perform = "Subtraction";
      } else if (operator.textContent === "×") {
        perform = "Multiplication";
      } else if (operator.textContent === "/") {
        perform = "Division";
      }
    }
  });
});

resetBtn.addEventListener("click", () => {
  let calculatorScreen = document.querySelector(".calculator__screen");
  num1 = "";
  num2 = "";
  perform = undefined;
  calculatorScreen.textContent = "0";
});

deleteBtn.addEventListener("click", () => {
  if (!num2) {
    let calculatorScreen = document.querySelector(".calculator__screen");
    perform = undefined;
    num1 = num1.slice(0, -1);
    calculatorScreen.textContent = num1 || 0;
  } else {
    let calculatorScreen = document.querySelector(".calculator__screen");
    num2 = num2.slice(0, -1);
    calculatorScreen.textContent = num2 || 0;
  }
});