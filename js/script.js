
function salvarPDF() {
  // Preenche a data no cabeçalho de impressão (ex: "Abril / 2026")
  const agora = new Date();
  const mes = agora.toLocaleString('pt-BR', { month: 'long' });
  const ano = agora.getFullYear();
  const dataEl = document.getElementById('print-date');
  if (dataEl) {
    dataEl.textContent =
      mes.charAt(0).toUpperCase() + mes.slice(1) + ' / ' + ano;
  }
  window.print();
}

function formatBRL(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}


const totais = {
  receitas:       0,
  investimentos:  0,
  moradia:        0,
  transporte:     0,
  saude:          0,
  alimentacao:    0,
  pessoais:       0,
  cuidados:       0,
  cartao:         0,
};

function somarInputs(seletor) {
  let soma = 0;
  document.querySelectorAll(seletor).forEach(input => {
    const valor = parseFloat(input.value);
    if (!isNaN(valor) && valor > 0) soma += valor;
  });
  return soma;
}


function atualizarBalanco() {

  const totalDespesas =
    totais.moradia +
    totais.transporte +
    totais.saude +
    totais.alimentacao +
    totais.pessoais +
    totais.cuidados +
    totais.cartao;

  const saldo = totais.receitas - (totais.investimentos + totalDespesas);

  
  document.getElementById('total_receitas_balanco').innerText    = formatBRL(totais.receitas);
  document.getElementById('total_investimento_balanco').innerText = formatBRL(totais.investimentos);
  document.getElementById('total_despesas').innerText            = formatBRL(totalDespesas);
  document.getElementById('total_saldo').innerText               = formatBRL(saldo);


  const saldoCard = document.getElementById('saldo_card');
  if (saldoCard) {
    saldoCard.classList.remove('balanco-card--saldo-pos', 'balanco-card--saldo-neg');
    saldoCard.classList.add(saldo >= 0 ? 'balanco-card--saldo-pos' : 'balanco-card--saldo-neg');
  }
}



function somarValoresReceitas() {
  totais.receitas = somarInputs('.input_receitas');
  document.getElementById('resultado_receitas').innerText = formatBRL(totais.receitas);
  atualizarBalanco();
}

function somarValoresInvestimentos() {
  totais.investimentos = somarInputs('.inputs_investimentos');
  document.getElementById('resultado_investimentos').innerText = formatBRL(totais.investimentos);
  atualizarBalanco();
}

function somarValoresMoradia() {
  totais.moradia = somarInputs('.inputs_moradia');
  document.getElementById('resultado_moradia').innerText = formatBRL(totais.moradia);
  atualizarBalanco();
}

function somarValoresTransporte() {
  totais.transporte = somarInputs('.inputs_transporte');
  document.getElementById('resultado_transporte').innerText = formatBRL(totais.transporte);
  atualizarBalanco();
}

function somarValoresSaude() {
  totais.saude = somarInputs('.inputs_saude');
  document.getElementById('resultado_saude').innerText = formatBRL(totais.saude);
  atualizarBalanco();
}

function somarValoresAlimentacao() {
  totais.alimentacao = somarInputs('.inputs_alimentacao');
  document.getElementById('resultado_alimentacao').innerText = formatBRL(totais.alimentacao);
  atualizarBalanco();
}

function somarValoresPessoais() {
  totais.pessoais = somarInputs('.inputs_pessoais');
  document.getElementById('resultado_pessoais').innerText = formatBRL(totais.pessoais);
  atualizarBalanco();
}

function somarValoresCuidados() {
  totais.cuidados = somarInputs('.inputs_cuidados');
  document.getElementById('resultado_cuidados').innerText = formatBRL(totais.cuidados);
  atualizarBalanco();
}

function somarValoresCartao() {
  totais.cartao = somarInputs('.inputs_cartao');
  document.getElementById('resultado_cartao').innerText = formatBRL(totais.cartao);
  atualizarBalanco();
}


const mapeamento = [
  { seletor: '.input_receitas',        handler: somarValoresReceitas       },
  { seletor: '.inputs_investimentos',  handler: somarValoresInvestimentos  },
  { seletor: '.inputs_moradia',        handler: somarValoresMoradia        },
  { seletor: '.inputs_transporte',     handler: somarValoresTransporte     },
  { seletor: '.inputs_saude',          handler: somarValoresSaude          },
  { seletor: '.inputs_alimentacao',    handler: somarValoresAlimentacao    },
  { seletor: '.inputs_pessoais',       handler: somarValoresPessoais       },
  { seletor: '.inputs_cuidados',       handler: somarValoresCuidados       },
  { seletor: '.inputs_cartao',         handler: somarValoresCartao         },
];

mapeamento.forEach(({ seletor, handler }) => {
  document.querySelectorAll(seletor).forEach(input => {
    input.addEventListener('input', handler);
  });
});
