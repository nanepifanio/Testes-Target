import PutData from "./putData.js";

const average = (data) => {
  const noZeroInvoices = data
    .filter((invoice) => invoice.valor)
    .map((invoice) => invoice.valor);
  const sum = noZeroInvoices.reduce((acc, cur) => acc + cur);
  const avg = sum / noZeroInvoices.length;
  const put = new PutData("average", [avg]);
  put.putDataIn();
  return avg;
};

export default average;
