// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function agruparVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    let cliente = venda.cliente
    let total = venda.total

    if (acumulador[cliente]) {
      acumulador[cliente] += total
    } else {
      acumulador[cliente] = total
    }

    return acumulador
  }, {})
}

let vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "Bruno", total: 200 },
  { cliente: "Ana", total: 150 },
  { cliente: "Carlos", total: 50 },
  { cliente: "Bruno", total: 100 }
];

let resultado = agruparVendasPorCliente(vendas)
console.log(resultado)
