import PutData from "./putData.js";

const showAllInvoicing = (data) => {
  const put = new PutData("totInvoicing", data);
  put.putDataIn();
};

export default showAllInvoicing;
