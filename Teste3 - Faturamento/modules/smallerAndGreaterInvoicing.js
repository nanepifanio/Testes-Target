import PutData from "./putData.js";

const smallerAndGreaterInvoicing = (data) => {
  const notZero = data.filter((inv) => inv.valor);
  const smallerInv = notZero.reduce((acc, cur) =>
    cur.valor <= acc.valor ? cur : acc
  );
  const greaterInv = data.reduce((acc, cur) =>
    cur.valor >= acc.valor ? cur : acc
  );
  const smaller = new PutData("smallerInvoicing", [smallerInv]);
  const greater = new PutData("greaterInvoicing", [greaterInv]);
  smaller.putDataIn();
  greater.putDataIn();
};

export default smallerAndGreaterInvoicing;
