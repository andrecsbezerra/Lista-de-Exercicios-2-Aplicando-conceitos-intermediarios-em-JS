// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
  let obj = {}
  for (let i = 0; i < pares.length; i++) {
    let [chave, valor] = pares[i]
    obj[chave] = valor
  }
  return obj
}

function objetoParaPares(obj) {
  let pares = []
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]])
    }
  }
  return pares
}

let pares = [["nome", "Ana"], ["idade", 30]]
let obj = paresParaObjeto(pares)
console.log(obj)

let paresDeNovo = objetoParaPares(obj)
console.log(paresDeNovo)
