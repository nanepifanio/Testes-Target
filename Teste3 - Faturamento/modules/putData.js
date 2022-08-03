class PutData {
  constructor(element, data) {
    this.element = document.querySelector(`[data-tbody=${element}]`);
    this.data = data;
  }

  static formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  putDataIn() {
    this.data.forEach((data) => {
      // Foi necessário fazer isso para colocar o valor da média mensal dinâmicamente
      if (data.dia && !isNaN(data.valor)) {
        this.element.innerHTML += `
        <tr>
          <td>${data.dia}</td>
          <td>${PutData.formatCurrency(data.valor)}</td>
        </tr>      
        `;
      } else {
        this.element.innerHTML = `
        <tr>
          <td colspan="2">${PutData.formatCurrency(data)}</td>
        </tr>      
        `;
      }
    });
  }
}

export default PutData;
