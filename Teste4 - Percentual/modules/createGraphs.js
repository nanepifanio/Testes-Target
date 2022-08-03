import PutData from "../../Teste3 - Faturamento/modules/putData.js";
import { calcPercentage } from "./calcPercentage.js";

class CreateGraphs {
  constructor(element, data, total) {
    this.data = data;
    this.element = document.querySelector(element);
    this.total = total;
    this.colors = ["#0f0", "#00f", "#f00", "#ff0", "#f0f"];
  }

  createGraphs() {
    this.data.forEach((data, index) => {
      const clone = this.element.cloneNode(true);
      clone.querySelector("[data-name]").innerText = data.estado;
      clone.querySelector("[data-value]").innerText = PutData.formatCurrency(
        data.valor
      );
      const percentage = calcPercentage(this.total, data.valor);
      clone.querySelector("[data-percent]").innerText = percentage + "%";
      clone.querySelector(
        "[data-graph]"
      ).style = `background-color:${this.colors[index]};width:${percentage}%`;
      clone.style = "display:flex;";
      document.querySelector(".graph").appendChild(clone);
    });
  }
}

export default CreateGraphs;
