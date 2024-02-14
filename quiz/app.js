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
    correct: "A",
  },
  {
    question: "Como você se sente em relação a quantidade de tarefas em sua vida atualmente?",
    imgSrc: "Stuffs/img/flowers.gif",
    choiceA: "Muitas vezes me sinto sobrecarreagado(a)",
    choiceB: "Geralmente consigo lidar, mas há momentos de intensa pressão",
    choiceC: "Consigo administrar bem porque tenho poucas, por enquanto",
    choiceD: "Raramente me sinto sobrecarregado(a)",
    correct: "A",
  },
  {
    question: "Já experimentou consequências negativas de priorizar errôneamente as suas tarefas?",
    imgSrc: "Stuffs/img/zero.gif",
    choiceA: "Já experimentei atrasos em projetos devido a uma má escolha de prioridades",
    choiceB: "Erros de priorização afetaram minha produtividade",
    choiceC: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    choiceD: "Até agora não experimentei consequências significativas",
    correct: "A",
  },
//   {
//     question: "What is it that goes up, but never comes down?",
//     imgSrc: "Stuffs/img/trick.gif",
//     choiceA: "Love",
//     choiceB: "Honesty",
//     choiceC: "Age",
//     choiceD: "Dream",
//     correct: "C",
//   },
//   {
//     question: "What is Lord Voldemort’s real name?",
//     imgSrc: "Stuffs/img/doo.gif",
//     choiceA: "Tom Marvolo Riddle",
//     choiceB: "Tom Marvilo Riddle",
//     choiceC: "Tom Marvin Riddle",
//     choiceD: "Tom Ravolo Riddle",
//     correct: "C",
//   },
//   {
//     question: "Who is Mojo Jojo?",
//     imgSrc: "Stuffs/img/mojo.png",
//     choiceA: "Crazy scientist",
//     choiceB: "Monkey",
//     choiceC: "Genius Chimpanzee",
//     choiceD: "An Evil",
//     correct: "C",
//   },
//   {
//     question: "What was Tom's full name?",
//     imgSrc: "Stuffs/img/cat.png",
//     choiceA: "Thomas Cat",
//     choiceB: "Cat Tom",
//     choiceC: "Tommy",
//     choiceD: "Tom",
//     correct: "A",
//   },
//   {
//     question: "What is Oggy's hobby?",
//     imgSrc: "Stuffs/img/oggy.png",
//     choiceA: "Watching TV",
//     choiceB: "Reading the newspaper",
//     choiceC: "Eating Hotdogs",
//     choiceD: "Sleeping",
//     correct: "A",
//   },
//   {
//     question:
//       "Who was the first between Shinzo and Shishimaru to appear in the show?",
//     imgSrc: "Stuffs/img/hatori.png",
//     choiceA: "Shinzo",
//     choiceB: "Shishimaru",
//     choiceC: "Tomako",
//     choiceD: "Nobita",
//     correct: "B",
//   },
//   {
//     question: "Which of these statements is correct?",
//     imgSrc: "Stuffs/img/doraemon.gif",
//     choiceA: "Doraemon is a dogrobot",
//     choiceB: "Doraemon is a catrobot",
//     choiceC: "Doraemon wants Sizuka",
//     choiceD: "None of this",
//     correct: "B",
//   },
//   {
//     question: "How old is Pikachu in 2020?",
//     imgSrc: "Stuffs/img/pikachu.gif",
//     choiceA: "20 years",
//     choiceB: "19 years",
//     choiceC: "12 years",
//     choiceD: "5 years",
//     correct: "A",
//   },
//   {
//     question: "What is the highest-grossing box office film of all time?",
//     imgSrc: "Stuffs/img/master.gif",
//     choiceA: "Parasite",
//     choiceB: "Horns",
//     choiceC: "Titanic",
//     choiceD: "Avengers: Endgame",
//     correct: "D",
//   },
//   {
//     question:
//       "How could a man go outside in the pouring rain without protection, and not have a hair on his head get wet?",
//     imgSrc: "Stuffs/img/emoji.gif",
//     choiceA: "He was insane",
//     choiceB: "He wasn't a man",
//     choiceC: "He was SpiderMan",
//     choiceD: "He was bald",
//     correct: "D",
//   },
//   {
//     question: "How many brothers does Ricardo Milos have?",
//     imgSrc: "Stuffs/img/ricardo.gif",
//     choiceA: "He has no brother.",
//     choiceB: "He has a twin bro",
//     choiceC: "He has a Nigga bro",
//     choiceD: "100",
//     correct: "B",
//   },
//   {
//     question: "In the series Johnny Bravo, What color is Johnny's hair?",
//     imgSrc: "Stuffs/img/bravo.png",
//     choiceA: "Blonde",
//     choiceB: "Brown",
//     choiceC: "Red yellow",
//     choiceD: "Bright yellow",
//     correct: "A",
//   },
//   {
//     question: "You fall in love with girls?",
//     imgSrc: "Stuffs/img/girl.png",
//     choiceA: "Yes",
//     choiceB: "Sure",
//     choiceC: "Certainly",
//     choiceD: "aye",
//     correct: "C",
//   },
//   {
//     question: "Can you guess this Alien?",
//     imgSrc: "Stuffs/img/ben10.png",
//     choiceA: "Overflow",
//     choiceB: "Swampfire",
//     choiceC: "Wildvine",
//     choiceD: "Heatblast",
//     correct: "B",
//   },
//   {
//     question:
//       "Some months have 31 days, others have 30 days, but how many have 28 days?",
//     imgSrc: "Stuffs/img/0.gif",
//     choiceA: "All the months",
//     choiceB: "February",
//     choiceC: "2 February in 10 years",
//     choiceD: "None of this",
//     correct: "A",
//   },
//   {
//     question: "4 / 4 * (4 + 4 - 4 -4)?",
//     imgSrc: "Stuffs/img/frog.gif",
//     choiceA: "4",
//     choiceB: "LOl",
//     choiceC: "0",
//     choiceD: "1",
//     correct: "C",
//   },
//   {
//     question: "Who is Mr. Bean’s best friend?",
//     imgSrc: "Stuffs/img/bean.gif",
//     choiceA: "Teddy",
//     choiceB: "Tedy",
//     choiceC: "Tiddy",
//     choiceD: "Tommy",
//     correct: "A",
//   },
];

// Extra variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
// const questionTime = 20; // 20s

let TIMER;
let score = 0;

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

// counter render

// function renderCounter() {
//   if (count <= questionTime) {
//     counter.innerHTML = count;

//     count++;
//   } else {
//     count = 0;
//     // change progress color to red
//     answerIsWrong();
//     if (runningQuestion < lastQuestion) {
//       runningQuestion++;
//       renderQuestion();
//     } else {
//       // end the quiz and show the score
//       clearInterval(TIMER);
//       scoreRender();
//     }
//   }
// }

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = -10;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
  var music = new Audio();
  music.src = "Stuffs/music/yeah.mp3";
  music.play();
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
  var music = new Audio();
  music.src = "Stuffs/music/Huh.mp3";
  music.play();
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";
  var music = new Audio();
  music.src = "Stuffs/music/GameOver.mp3";
  music.play();

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "Stuffs/img/5.png"
      : scorePerCent >= 60
      ? "Stuffs/img/4.png"
      : scorePerCent >= 40
      ? "Stuffs/img/3.png"
      : scorePerCent >= 20
      ? "Stuffs/img/2.png"
      : "Stuffs/img/1.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}

//////////////////////////////////////////////////////
var myVar;

function myLoader() {
  myVar = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}
