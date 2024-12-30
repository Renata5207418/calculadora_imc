// Selecionando elementos
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularBtn = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');
const valorImcSpan = document.getElementById('valor-imc');
const classificacaoP = document.getElementById('classificacao');
const recomendacaoP = document.getElementById('recomendacao');

const gerarTreinoBtn = document.getElementById('gerar-treino');
const treinoDiv = document.getElementById('treino');
const listaTreinoUl = document.getElementById('lista-treino');

// Função para calcular IMC
function calcularIMC() {
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value) / 100; // Convertendo cm para metros

  // Verifica se peso ou altura estão inválidos
  if (!peso || !altura || peso <= 0 || altura <= 0) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
  }

  // Calcula o IMC
  const imc = peso / (altura * altura);
  const imcArredondado = imc.toFixed(2);

  // Exibe o resultado
  valorImcSpan.textContent = imcArredondado;

  // Define a classificação e recomendação
  let classificacaoTexto = '';
  let recomendacaoTexto = '';

  if (imc < 18.5) {
    classificacaoTexto = 'Abaixo do peso';
    recomendacaoTexto = 'Talvez seja interessante conversar com um profissional de saúde sobre ganho de peso saudável.';
  } else if (imc < 25) {
    classificacaoTexto = 'Peso normal';
    recomendacaoTexto = 'Mantenha uma dieta balanceada e pratique atividades físicas regularmente para continuar saudável.';
  } else if (imc < 30) {
    classificacaoTexto = 'Sobrepeso';
    recomendacaoTexto = 'Você pode considerar ajustar seus hábitos alimentares e incluir atividades físicas na rotina para evitar complicações.';
  } else if (imc < 35) {
    classificacaoTexto = 'Obesidade Grau I';
    recomendacaoTexto = 'Recomendável buscar orientação profissional para avaliação da dieta e prática de exercícios.';
  } else if (imc < 40) {
    classificacaoTexto = 'Obesidade Grau II';
    recomendacaoTexto = 'Importante consultar um médico ou nutricionista para planejar uma perda de peso gradual e saudável.';
  } else {
    classificacaoTexto = 'Obesidade Grau III ou Mórbida';
    recomendacaoTexto = 'Recomendável procurar assistência médica especializada para reduzir riscos à saúde.';
  }

  classificacaoP.textContent = classificacaoTexto;
  recomendacaoP.textContent = recomendacaoTexto;

  // Mostra o container de resultado
  resultadoDiv.classList.remove('hidden');
}

// Função para gerar o treino
function gerarTreino() {
  const treino = {
    Segunda: ['Flexões (3x15)', 'Agachamentos (3x20)', 'Abdominais (3x25)'],
    Terça: ['Corrida no lugar (30 minutos)', 'Pular corda (3x2 minutos)', 'Prancha (3x1 minuto)'],
    Quarta: ['Supino (3x12)', 'Remada (3x12)', 'Elevação lateral (3x15)'],
    Quinta: ['Yoga ou alongamento (30 minutos)', 'Burpees (3x10)', 'Lunges (3x15 cada perna)'],
    Sexta: ['Levantamento terra (3x10)', 'Cadeira extensora (3x15)', 'Bicicleta no ar (3x20)']
  };

  // Limpa a lista atual, se houver
  listaTreinoUl.innerHTML = '';

  // Popula a lista com os exercícios
  for (const dia in treino) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${dia}:</strong> ${treino[dia].join(', ')}`;
    listaTreinoUl.appendChild(li);
  }

  // Mostra a seção de treino
  treinoDiv.classList.remove('hidden');
}

// Evento de clique no botão "Calcular"
calcularBtn.addEventListener('click', calcularIMC);

// Evento de clique no botão "Gerar Treino"
gerarTreinoBtn.addEventListener('click', gerarTreino);
