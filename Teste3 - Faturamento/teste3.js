import FetchData from "./modules/fetchData.js";
import showAllInvoicing from "./modules/allInvoicing.js";
import average from "./modules/average.js";
import greatersThanAverage from "./modules/greatersThanAverage.js";
import smallerAndGreaterInvoicing from "./modules/smallerAndGreaterInvoicing.js";

(async () => {
  const ftch = new FetchData("./dados.json");
  const data = await ftch.fetchData();
  showAllInvoicing(data);
  const avg = average(data);
  greatersThanAverage(data, avg);
  smallerAndGreaterInvoicing(data);
})();
