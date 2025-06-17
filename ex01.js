//1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
  // Dentro do Date os meses iniciam no index 0 (jan = 0)
  mes = mes - 1

  let data = new Date(ano, mes, dia)

  return (
    // Sempre Que a Data for "invalida" o Date joga as datas pra frente
    // Logo, é somente necessario verificar se a data nao for igual ao inserido
    data.getFullYear() === ano &&
    data.getMonth() === mes &&
    data.getDate() === dia
  )
}

console.log(ehDataValida(31,2,2024))
