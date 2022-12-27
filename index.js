// Solicita saldo inicial da peça
let saldo = parseInt(prompt("Informe o saldo inicial da peça:"));

// Inicializa flag para controle do loop
let continuar = true;

// Loop para entrada de dados
while (continuar) {
  // Solicita tipo de entrada e quantidade de peças
  let tipoEntrada = parseInt(prompt("Informe o tipo de entrada (1 para compra, 2 para venda):"));
  let quantidade = parseInt(prompt("Informe a quantidade de peças:"));

  // Verifica tipo de entrada e atualiza saldo da peça
  if (tipoEntrada === 1) {
    // Compra de peças
    saldo += quantidade;
  } else if (tipoEntrada === 2) {
    // Venda de peças
    if (quantidade <= saldo) {
      saldo -= quantidade;
    } else {
      console.log("Saldo insuficiente");
    }
  } else {
    console.log("Tipo de entrada inválido");
  }

  // Apresenta saldo atualizado da peça
  console.log(`Saldo atual: ${saldo}`);

  // Pergunta se o usuário deseja continuar
  continuar = (prompt("Deseja continuar (s ou n)?").toLowerCase() === "s");
}

// Apresenta mensagem de encerramento do sistema
console.log("Sistema encerrado");