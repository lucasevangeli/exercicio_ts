
function multiplicacao(x: number, y: number): number {
    return x * y;
  }
  
  
  function saudacao(nome: string): string {
    return "Olá " + nome;
  }
  
  
  const resultadoMultiplicacao = multiplicacao(5, 3);
  console.log("Resultado da multiplicação:", resultadoMultiplicacao);
  
  const mensagemSaudacao = saudacao("Lucas");
  console.log(mensagemSaudacao);
  