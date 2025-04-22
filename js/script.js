function somarTotalDespesas() {
  const idsResultados = [
    'resultado_investimentos',
    'resultado_moradia',
    'resultado_transporte',
    'resultado_saude',
    'resultado_alimentacao',
    'resultado_pessoais',
    'resultado_cuidados',
    'resultado_cartao'
  ];

  let total = 0;

  idsResultados.forEach(id => {
    const valor = parseFloat(document.getElementById(id).innerText);
    if (!isNaN(valor)) {
      total += valor;
    }
  });

  document.getElementById('total_despesas').innerText = total;

  calcularSaldo()
}

function somarValoresReceitas() {
    let inputs = document.querySelectorAll('.input_receitas');
    let soma = 0;
  
    inputs.forEach(function(input) {
      let valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        soma += valor;
      }
    });
  
    document.getElementById('resultado_receitas').innerText = soma;

    document.getElementById('total_receitas_balanco').innerText = soma;

    calcularSaldo()

  }
  
  const inputsReceitas = document.querySelectorAll('.input_receitas');
  inputsReceitas.forEach(input => {
    input.addEventListener('input', somarValoresReceitas);
  });
  


function somarValoresInvestimentos() {
    let inputs = document.querySelectorAll('.inputs_investimentos');
    let soma = 0;
  
    inputs.forEach(function(input) {
      let valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        soma += valor;
      }
    });
  
    document.getElementById('resultado_investimentos').innerText = soma;

    document.getElementById('total_investimento_balanco').innerText = soma;
  }
  
  const inputsInvestimentos = document.querySelectorAll('.inputs_investimentos');
  inputsInvestimentos.forEach(input => {
    input.addEventListener('input', somarValoresInvestimentos);
  });

  

function somarValoresMoradia() {
    let inputs = document.querySelectorAll('.inputs_moradia');
    let soma = 0;
  
    inputs.forEach(function(input) {
      let valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        soma += valor;
      }
    });
  
    document.getElementById('resultado_moradia').innerText = soma;

  somarTotalDespesas()
    
  }
  
  const inputsMoradia = document.querySelectorAll('.inputs_moradia');
  inputsMoradia.forEach(input => {
    input.addEventListener('input', somarValoresMoradia);
  });



function somarValoresTransporte() {
    let inputs = document.querySelectorAll('.inputs_transporte');
    let soma = 0;
  
    inputs.forEach(function(input) {
      let valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        soma += valor;
      }
    });
  
    document.getElementById('resultado_transporte').innerText = soma;

    somarTotalDespesas()
  }
  
  const inputsTransporte = document.querySelectorAll('.inputs_transporte');
  inputsTransporte.forEach(input => {
    input.addEventListener('input', somarValoresTransporte);
  });



function somarValoresSaude() {
    let inputs = document.querySelectorAll('.inputs_saude');
    let soma = 0;
  
    inputs.forEach(function(input) {
      let valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        soma += valor;
      }
    });
  
    document.getElementById('resultado_saude').innerText = soma;

    somarTotalDespesas()
  }
  
  const inputsSaude = document.querySelectorAll('.inputs_saude');
  inputsSaude.forEach(input => {
    input.addEventListener('input', somarValoresSaude);
  });



function somarValoresAlimentacao() {
    let inputs = document.querySelectorAll('.inputs_alimentacao');
    let soma = 0;
  
    inputs.forEach(function(input) {
      let valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        soma += valor;
      }
    });
  
    document.getElementById('resultado_alimentacao').innerText = soma;

    somarTotalDespesas()
  }
  
  const inputsAlimentacao = document.querySelectorAll('.inputs_alimentacao');
  inputsAlimentacao.forEach(input => {
    input.addEventListener('input', somarValoresAlimentacao);
  });



function somarValoresPessoais() {
    let inputs = document.querySelectorAll('.inputs_pessoais');
    let soma = 0;
  
    inputs.forEach(function(input) {
      let valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        soma += valor;
      }
    });
  
    document.getElementById('resultado_pessoais').innerText = soma;

    somarTotalDespesas()
  }
  
  const inputsPessoais = document.querySelectorAll('.inputs_pessoais');
  inputsPessoais.forEach(input => {
    input.addEventListener('input', somarValoresPessoais);
  });



function somarValoresCuidados() {
    let inputs = document.querySelectorAll('.inputs_cuidados');
    let soma = 0;
  
    inputs.forEach(function(input) {
      let valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        soma += valor;
      }
    });
  
    document.getElementById('resultado_cuidados').innerText = soma;

    somarTotalDespesas()
  }
  
  const inputsCuidados = document.querySelectorAll('.inputs_cuidados');
  inputsCuidados.forEach(input => {
    input.addEventListener('input', somarValoresCuidados);
  });



  function somarValoresCartao() {
    let inputs = document.querySelectorAll('.inputs_cartao');
    let soma = 0;
  
    inputs.forEach(function(input) {
      let valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        soma += valor;
      }
    });
  
    document.getElementById('resultado_cartao').innerText = soma;

    somarTotalDespesas()
  }
  
  const inputsCartao = document.querySelectorAll('.inputs_cartao');
  inputsCartao.forEach(input => {
    input.addEventListener('input', somarValoresCartao);
  });



function calcularSaldo() {
    const totalReceitas = parseFloat(document.getElementById('total_receitas_balanco').innerText) || 0;
    const totalInvestimentos = parseFloat(document.getElementById('total_investimento_balanco').innerText) || 0;
    const totalDespesas = parseFloat(document.getElementById('total_despesas').innerText) || 0;
  
    const saldo = totalReceitas - (totalInvestimentos + totalDespesas);
  
 
    const saldoSpan = document.getElementById('total_saldo');
    if (saldoSpan) {
      saldoSpan.innerText = saldo;
    }
  }
  
