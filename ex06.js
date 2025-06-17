// 6. Memorization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  let cache = {} // o cache armazena os argumentos unicos ex.: ('[3,2]','[4,1]')
                 // e toda vez que esse argumento estiver presente no cache ele so retorna direto 
  return function (...args) {
    let chave = JSON.stringify(args) // transforma os argumentos em string unica

    if (cache[chave] !== undefined) {
      // resultado ja esta no cache
      return cache[chave]
    }

    let resultado = fn.apply(this, args) // executa a função original
    cache[chave] = resultado // armazena no cache
    console.log(cache) // print do cache para a visualizacao
    return resultado
  };
}

// Exemplo de uso
function somar(a, b) {
  console.log(`Somando ${a} + ${b}`);
  return a + b;
}

let somarMemo = memoize(somar);

console.log(somarMemo(2, 3)); // Somando 2 + 3 → 5
console.log(somarMemo(2, 3)); // (Sem log) → 5, do cache
console.log(somarMemo(4, 1)); // Somando 4 + 1 → 5
console.log(somarMemo(2, 3)); // (Sem log) → 5, do cache


// cache final -> ('[3,2]','[4,1]')
