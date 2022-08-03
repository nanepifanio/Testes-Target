import PutData from "./putData.js";

const greatersThanAverage = (data, avg) => {
  const showTotalDays = (total) => {
    const container = document.querySelector(
      '[data-tbody="monthlyGreatersInvoicing"]'
    );
    container.innerHTML += `
            <tr>
              <td style="font-weight:bold;">Total: ${total} dias</td>
            </tr>      
    `;
  };

  const greatersThanAvg = data.filter((invoicing) => invoicing.valor > avg);
  const put = new PutData("monthlyGreatersInvoicing", greatersThanAvg);
  put.putDataIn();
  showTotalDays(greatersThanAvg.length);
};

export default greatersThanAverage;
