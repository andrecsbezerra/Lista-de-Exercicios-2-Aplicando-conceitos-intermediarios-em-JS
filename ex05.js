// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timeoutId

  return function (...args) {
    clearTimeout(timeoutId) // limpa o timer anterior
    timeoutId = setTimeout(() => {
      fn.apply(this, args) // executa a função com os mesmos argumentos
    }, delay)
  }
}
