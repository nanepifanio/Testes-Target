import FetchData from "../Teste3 - Faturamento/modules/fetchData.js";
import CreateGraphs from "./modules/createGraphs.js";
import { calcTotal } from "./modules/calcTotal.js";

(async () => {
  const ftch = new FetchData("./representacao.json");
  const data = await ftch.fetchData();
  const total = calcTotal(data);
  const graphs = new CreateGraphs("[data-container]", data, total);
  graphs.createGraphs();
})();
