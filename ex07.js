// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() // cria uma cópia para não alterar o array original
    .sort((a, b) => a.preco - b.preco) // ordena por preço em ordem crescente
    .map(produto => produto.nome) // extrai os nomes
}

let produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 800 },
  { nome: "Mouse", preco: 100 }
]

let nomesOrdenados = nomesOrdenadosPorPreco(produtos)
console.log(nomesOrdenados)
