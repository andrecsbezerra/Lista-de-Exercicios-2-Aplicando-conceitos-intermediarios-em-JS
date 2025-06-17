// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function palavrasUnicas(frase) {
  const palavras = frase.split(" ") // divide a frase em palavras
  const unicas = [] // incia um array vazio para a insercao de palavras unicas

  for (let i = 0; i < palavras.length; i++) {
    let jaExiste = false

    // Verifica se a palavra já está no array de únicas
    for (let j = 0; j < unicas.length; j++) {
      if (palavras[i] === unicas[j]) {
        jaExiste = true
        break
      }
    }

    // Se não estiver, adiciona ao array de únicas
    if (!jaExiste) {
      unicas.push(palavras[i])
    }
  }

  return unicas;
}

// Exemplo de uso
let frase = "olá olá mundo mundo"
let resultado = palavrasUnicas(frase)
console.log(resultado)
