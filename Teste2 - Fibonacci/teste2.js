const resultArea = document.querySelector(".result");
const btn = document.querySelector("button");
const inpt = document.querySelector("input");

const fibonacci = (n) => {
  let fibList = [];
  let a = 0,
    b = 1;
  if (n === 0) {
    fibList = [a];
  } else if (n == 1) {
    fibList = [a, b];
  } else {
    fibList = [a, b];
    for (let i = 2; i <= n; i++) {
      const fib = a;
      a = b;
      b += fib;
      fibList.push(b);
    }
  }
  return fibList;
};

const showResult = (bool) => {
  if (bool) {
    resultArea.innerText = "O número pertence a sequência.";
    resultArea.classList.remove("no");
    resultArea.classList.add("yes");
  } else {
    resultArea.innerText = "O número não pertence a sequência.";
    resultArea.classList.remove("yes");
    resultArea.classList.add("no");
  }
};

const handleClick = () => {
  const value = inpt.value;
  if (value.length && +value >= 0) {
    const fibonacciList = fibonacci(+value + 1);
    const valueInArray = fibonacciList.includes(+value);
    showResult(valueInArray);
    inpt.focus();
  }
};

btn.addEventListener("click", handleClick);
