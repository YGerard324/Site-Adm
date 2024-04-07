const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const questionContainer = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");

// Criando as questões
let questions = [
  {
    question: "1-Quais são os principais desafios que você enfrenta no gerenciamento de suas tarefas diárias?",
    choiceA: "Tenho dificuldade em priorizar tarefas importantes",
    choiceB: "Constantemente não consigo cumprir prazos",
    choiceC: "Me sobrecarrego de tarefas sem uma visão clara das prioridades",
    choiceD: "Não tenho dificuldade no gerenciamento de tarefas",
    correct: "A",
  },
  {
    question: "Como você se sente em relação a quantidade de tarefas em sua vida atualmente?",
    choiceA: "Muitas vezes me sinto sobrecarregado(a)",
    choiceB: "Geralmente consigo lidar, mas há momentos de intensa pressão",
    choiceC: "Consigo administrar bem porque tenho poucas, por enquanto",
    choiceD: "Raramente me sinto sobrecarregado(a)",
    correct: "A",
  },
  {
    question: "Já experimentou consequências negativas de priorizar erroneamente as suas tarefas?",
    choiceA: "Já experimentei atrasos em projetos devido a uma má escolha de prioridades",
    choiceB: "Erros de priorização afetaram minha produtividade",
    choiceC: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    choiceD: "Até agora não experimentei consequências significativas",
    correct: "A",
  },
];

// Variáveis
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
// const questionTime = 20; // 20s

let TIMER;
let score = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;

// Renderizar questões

function renderQuestion() {

  let q = questions[runningQuestion];
  document.getElementById("question").innerHTML = "<b>Q. " + q.question + "</b>";

  document.getElementById("A").innerText = "A. " + q.choiceA;
  document.getElementById("B").innerText = "B. " + q.choiceB;
  document.getElementById("C").innerText = "C. " + q.choiceC;
  document.getElementById("D").innerText = "D. " + q.choiceD;
}

function startQuiz() {
  
  var startButton = document.getElementById("start");
  var optionsDiv = document.getElementById("options");

  startButton.style.display = "none";

  renderQuestion()

  optionsDiv.style.display = "block";
}
// Renderizar a barra de progresso
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    const questionId = "qIndex" + qIndex;
    progress.innerHTML += "<div class='prog' id='" + questionId + "'></div>";
  }
}

// Checar resposta
function checkAnswer(selectedChoice) {

  switch (selectedChoice) {
    case 'A':
      a++;
      break;
    case 'B':
      b++;
      break;
    case 'C':
      c++;
      break;
    case 'D':
      d++;
      break;
  }

  questionCounter()
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // Fim do quiz, mostra a pontuação
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function questionCounter() {
  const currentQuestionId = "qIndex" + runningQuestion;
  document.getElementById(currentQuestionId).style.backgroundColor = "#0f0";
}
//////////////////////////////////////////////////////
let myVar;

function myLoader() {
  myVar = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}