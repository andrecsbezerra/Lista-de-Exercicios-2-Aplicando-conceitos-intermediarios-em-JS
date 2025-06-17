//2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const sc = require("prompt-sync")()

// Gera um número aleatório de 1 a 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0

function perguntarPalpite() {
  let palpite = sc("Adivinhe o número (entre 1 a 100): ")
  tentativas++
  if (palpite == numeroSecreto) {
    console.log(`\x1b[32mParabéns! Você acertou em \x1b[34m${tentativas}\x1b[32m tentativa(s).\x1b[0m`)
  }else if (palpite < 1 || palpite > 100) {
    console.clear()
    console.log("\x1b[31mDigite um numero de \x1b[33m(1 a 100)\x1b[31m!!\x1b[0m")
    perguntarPalpite()
  } else if (palpite < numeroSecreto) {
    console.clear()
    console.log("\x1b[33mMais alto!\x1b[0m")
    perguntarPalpite()
  } else if (palpite > numeroSecreto) {
    console.clear()
    console.log("\x1b[33mMais baixo!\x1b[0m")
    perguntarPalpite()
  } else {
    console.clear();
    console.log("\x1b[31mDigite um número válido.\x1b[0m")
    perguntarPalpite()
  }
}

console.log("Bem-vindo ao jogo de adivinhação!")
perguntarPalpite()
