//----------------------- G O O D   L U C K -------------------------------//

// select all elements by id
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create questions
let questions = [
  {
    question: "1-Quais são os principais desafios que você enfrenta no gerenciamento de suas tarefas diárias?",
    imgSrc: "Stuffs/img/dog.gif",
    choiceA: "Tenho dificulade em priorizar tarefas importantes",
    choiceB: "Constantemente não consigo cumprir prazos",
    choiceC: "Me sobrecarrego de tarefas sem uma visão clara das prioridades",
    choiceD: "Não tenho dificuldade no gerenciamento de tarefas",
    // correct: "A",
  },
  {
    question: "Como você se sente em relação a quantidade de tarefas em sua vida atualmente?",
    imgSrc: "Stuffs/img/flowers.gif",
    choiceA: "Muitas vezes me sinto sobrecarreagado(a)",
    choiceB: "Geralmente consigo lidar, mas há momentos de intensa pressão",
    choiceC: "Consigo administrar bem porque tenho poucas, por enquanto",
    choiceD: "Raramente me sinto sobrecarregado(a)",
    // correct: "A",
  },
  {
    question: "Já experimentou consequências negativas de priorizar errôneamente as suas tarefas?",
    imgSrc: "Stuffs/img/zero.gif",
    choiceA: "Já experimentei atrasos em projetos devido a uma má escolha de prioridades",
    choiceB: "Erros de priorização afetaram minha produtividade",
    choiceC: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    choiceD: "Até agora não experimentei consequências significativas",
    // correct: "A",
  },
];

// Extra variables

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

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  var music = new Audio();
  music.src = "Stuffs/music/Easy song.mp3";
  music.play();
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}
// checkAnwer

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
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
  // var music = new Audio();
  // music.src = "Stuffs/music/yeah.mp3";
  // music.play();
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";
  // var music = new Audio();
  // music.src = "Stuffs/music/GameOver.mp3";
  // music.play();

  // calculate the amount of question percent answered by the user
  const scorePerCent = a;

  // choose the image based on the scorePerCent
  let img =
    a >= 3
      ? "Stuffs/img/5.png"
      : a >= 2
      ? "Stuffs/img/4.png"
      : a >= 1
      ? "Stuffs/img/3.png"
      : "Stuffs/img/1.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "</p>";
}

//////////////////////////////////////////////////////
var myVar;

function myLoader() {
  myVar = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}
