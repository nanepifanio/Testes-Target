import PutData from "../../Teste3 - Faturamento/modules/putData.js";

export const calcTotal = (data) => {
  const totArea = document.querySelector("[data-total]");

  const showTotal = (tot) => {
    totArea.innerText = PutData.formatCurrency(tot);
  };

  const total = data.reduce((acc, cur) => acc + cur.valor, 0);
  showTotal(total);
  return total;
};
