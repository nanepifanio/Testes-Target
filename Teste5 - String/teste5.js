const resultArea = document.querySelector(".result");
const btn = document.querySelector("button");
const inpt = document.querySelector("input");

const showResult = (inv) => {
  resultArea.innerText = inv.join("");
};

const inverter = (str) => {
  const invList = [];
  for (let i = str.length - 1; i >= 0; i--) {
    invList.push(str[i]);
  }
  return invList;
};

const handleClick = () => {
  const str = inpt.value;
  if (str) {
    const inv = inverter([...str]);
    showResult(inv);
  }
};

btn.addEventListener("click", handleClick);
