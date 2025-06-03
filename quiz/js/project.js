/* let score = 0;
let questionIndex = 0;
let data = [
    {
        question:"what is the abbreviation of HTML?",
        options: ["Hyper Text Markup Language", "Hyper Text Markup Link", "Hyper Text Markup List", "Hyper Text Markup Level"],
        answer: "1"
    },
    {
        question:"what is the abbreviation of CSS?",
        options: ["Cascading Style Sheets", "Cascading Style System", "Cascading Style Script", "Cascading Style Standard"],
        answer: "1"
    },
    {
        question:"what is the abbreviation of JS?",
        options: ["JavaScript", "JavaStyle", "JavaScriptStyle", "JavaScriptSystem"],
        answer: "1"
    },
    {
        question:"what is the abbreviation of DOM?",
        options: ["Document Object Model", "Document Object Module", "Document Object Method", "Document Object Map"],
        answer: "1"
    },
    {
        question:"what is the abbreviation of API?",
        options: ["Application Programming Interface", "Application Programming Internet", "Application Programming Interaction", "Application Programming Information"],
        answer: "1"
    },
    {
        question:"what is the abbreviation of URL?",
        options: ["Uniform Resource Locator", "Uniform Resource Link", "Uniform Resource Language", "Uniform Resource Level"],
        answer: "1"
    },
    {
        question:"what is the abbreviation of HTTP?",
        options: ["HyperText Transfer Protocol", "HyperText Transfer Program", "HyperText Transfer Page", "HyperText Transfer Process"],
        answer: "1"
    },
    {
        question:"what is the abbreviation of FTP?",
        options: ["File Transfer Protocol", "File Transfer Program", "File Transfer Page", "File Transfer Process"],
        answer: "1"
    },
    {
        question:"what is the abbreviation of SQL?",
        options: ["Structured Query Language", "Structured Query Link", "Structured Query List", "Structured Query Level"],
        answer: "1"
    },
    {
        question:"what is the abbreviation of XML?",
        options: ["eXtensible Markup Language", "eXtensible Markup Link", "eXtensible Markup List", "eXtensible Markup Level"],
        answer: "1"
    }

]

let main = () => {
  let question = document.getElementById("question");
  let ok = document.querySelector(".boxed");
const out=createQuestionPicker(data.length);
    let rand = out();
    questionIndex = rand;
  question.innerHTML = `(Q). ${data[rand].question}`;

  for (let i = 0; i < data[rand].options.length; i++) {
    document.getElementById(`option${i + 1}`).innerHTML = data[rand].options[i];
  }
  ok.style.display = "none";
  setInterval(updateTimer, 1000);
};

function createQuestionPicker(totalQuestions) {
  const usedIndices = new Set();

  return function getRandomQuestionIndex() {
    if (usedIndices.size === totalQuestions) {
      return null;
    }

    let index;
    do {
      index = Math.floor(Math.random() * totalQuestions);
    } while (usedIndices.has(index));

    usedIndices.add(index);
    return index;
  };
}
let seconds = 59;
let minutes = 4;

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    alert("Time's up!");
    window.location.reload();
    return;
  }

  if (seconds === 0) {
    seconds = 59;
    minutes--;
  } else {
    seconds--;
  }

  let time = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
  document.getElementById('timer').textContent = time;
}

let next =()=>{
    const selectedOption = document.querySelector('input[name="question1"]:checked');
    const selectedValue = selectedOption.value;
    if(selectedValue === data[questionIndex].answer) {
        score++;
    }
    main();
}


console.log(out());
 */

let score = 0;
let questionIndex = 0;
let usedIndices = new Set();

let data = [
  {
    question: "what is the abbreviation of HTML?",
    options: ["Hyper Text Markup List", "Hyper Text Markup Link", "Hyper Text Markup Language", "Hyper Text Markup Level"],
    answer: "3"
  },
  {
    question: "what is the abbreviation of CSS?",
    options: ["Cascading Style Script", "Cascading Style Sheets", "Cascading Style System", "Cascading Style Standard"],
    answer: "2"
  },
  {
    question: "what is the abbreviation of JS?",
    options: ["JavaScriptSystem", "JavaScriptStyle", "JavaScript", "JavaStyle"],
    answer: "3"
  },
  {
    question: "what is the abbreviation of DOM?",
    options: ["Document Object Method", "Document Object Module", "Document Object Map", "Document Object Model"],
    answer: "4"
  },
  {
    question: "what is the abbreviation of API?",
    options: ["Application Programming Interface", "Application Programming Internet", "Application Programming Information", "Application Programming Interaction"],
    answer: "1"
  },
  {
    question: "what is the abbreviation of URL?",
    options: ["Uniform Resource Locator", "Uniform Resource Language", "Uniform Resource Level", "Uniform Resource Link"],
    answer: "1"
  },
  {
    question: "what is the abbreviation of HTTP?",
    options: ["HyperText Transfer Process", "HyperText Transfer Protocol", "HyperText Transfer Page", "HyperText Transfer Program"],
    answer: "2"
  },
  {
    question: "what is the abbreviation of FTP?",
    options: ["File Transfer Process", "File Transfer Program", "File Transfer Page", "File Transfer Protocol"],
    answer: "4"
  },
  {
    question: "what is the abbreviation of SQL?",
    options: ["Structured Query Link", "Structured Query Language", "Structured Query List", "Structured Query Level"],
    answer: "2"
  },
  {
    question: "what is the abbreviation of XML?",
    options: ["eXtensible Markup Language", "eXtensible Markup Level", "eXtensible Markup Link", "eXtensible Markup List"],
    answer: "1"
  }
];

let questionPicker = createQuestionPicker(data.length);
let shuffledAnswerIndex = null;

function createQuestionPicker(total) {
  return function () {
    if (usedIndices.size === total) {
      showFinalScore(score);
      return null;
    }
    let index;
    do {
      index = Math.floor(Math.random() * total);
    } while (usedIndices.has(index));
    usedIndices.add(index);
    return index;
  };
}

function shuffleOptions(options, correctAnswerIndex) {
  const combined = options.map((opt, i) => ({ text: opt, originalIndex: i }));
  for (let i = combined.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combined[i], combined[j]] = [combined[j], combined[i]];
  }
  const shuffledOptions = combined.map(o => o.text);
  const newAnswerIndex = combined.findIndex(o => o.originalIndex === correctAnswerIndex);
  return { shuffledOptions, newAnswerIndex };
}

window.main = function() {
    let ok = document.querySelector(".boxed");
    ok.style.display = "none";
    let box=document.getElementById("quiz")
    box.style.display = "block";
  let question = document.getElementById("question");
  const index = questionPicker();
  if (index === null) return;
  questionIndex = index;

  const q = data[questionIndex];
  question.innerHTML = `(Q). ${q.question}`;

  const { shuffledOptions, newAnswerIndex } = shuffleOptions(q.options, parseInt(q.answer) - 1);
  shuffledAnswerIndex = newAnswerIndex;

  for (let i = 0; i < 4; i++) {
    document.getElementById(`option${i + 1}`).innerHTML = shuffledOptions[i];
    document.getElementById(`opt${i + 1}`).checked = false;
  }
};

let seconds = 59;
let minutes = 4;

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    alert("Time's up!");
    window.location.reload();
    return;
  }

  if (seconds === 0) {
    seconds = 59;
    minutes--;
  } else {
    seconds--;
  }

  let time = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
  document.getElementById('timer').textContent = time;
}

// Make next globally accessible for onclick usage
window.next = function() {
  const selected = document.querySelector('input[name="question1"]:checked');
  if (!selected) {
    alert("Please select an option.");
    return;
  }

  const selectedValue = selected.value; // "1", "2", "3", or "4"
  if (parseInt(selectedValue) - 1 === shuffledAnswerIndex) {
    score++;
  }

  window.main();
};

function showFinalScore(score) {
    score = score
  // Create overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1000";

  // Create score box
  const box = document.createElement("div");
  box.style.backgroundColor = "#ffffff";
  box.style.padding = "30px";
  box.style.borderRadius = "15px";
  box.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
  box.style.textAlign = "center";
  box.style.minWidth = "250px";
  box.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p style="font-size: 18px; font-weight: bold;">Your Score: ${score}</p>
    <button style="
      margin-top: 15px;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
    ">OK</button>
  `;

  // Append and handle reload
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  box.querySelector("button").onclick = () => {
    window.location.reload();
  };
}

// Start quiz on page load
window.onload = function () {

  setInterval(updateTimer, 1000);
};
