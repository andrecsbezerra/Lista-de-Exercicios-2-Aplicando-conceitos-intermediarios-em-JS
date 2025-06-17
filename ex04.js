// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function fatorial(n) {
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo.")
  } else if (n === 0) {
    return 1 // caso base
  } else {
    return n * fatorial(n - 1) // chamada recursiva
  }
}

console.log(fatorial(5))
