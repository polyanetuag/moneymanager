import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styled";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>13/05/2021</td>
          </tr>
          <tr>
            <td>Internet</td>
            <td className="withdraw">- R$90.00</td>
            <td>Casa</td>
            <td>11/05/2021</td>
          </tr>
          
        </tbody>
      </table>
    </Container>
  )
}