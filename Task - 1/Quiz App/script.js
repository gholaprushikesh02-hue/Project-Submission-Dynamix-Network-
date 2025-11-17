const quizData = [

  // Web Development Easy Questions
  {
    category: "webdev",
    difficulty: "easy",
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<script>", "<css>", "<link>"],
    correctAnswer: "<style>"
  },
  {
    category: "webdev",
    difficulty: "easy",
    question: "Which tag is used to create a table row?",
    options: ["<th>", "<tr>", "<td>", "<table>"],
    correctAnswer: "<tr>"
  },
  {
    category: "webdev",
    difficulty: "easy",
    question: "What is the correct HTML for inserting a line break?",
    options: ["<lb>", "<break>", "<br>", "<lnbr>"],
    correctAnswer: "<br>"
  },
  {
    category: "webdev",
    difficulty: "easy",
    question: "Which tag is used to embed an external web page in HTML?",
    options: ["<embed>", "<object>", "<iframe>", "<external>"],
    correctAnswer: "<iframe>"
  },
  {
    category: "webdev",
    difficulty: "easy",
    question: "Which tag is used to define a navigation bar?",
    options: ["<nav>", "<menu>", "<header>", "<navigation>"],
    correctAnswer: "<nav>"
  },
  {
    category: "webdev",
    difficulty: "easy",
    question: "Which tag is used to add a comment in HTML?",
    options: ["<!– comment –>", "// comment", "/* comment */", " # comment"],
    correctAnswer: "<!– comment –>"
  },
  {
    category: "webdev",
    difficulty: "easy",
    question: "Which is the correct syntax to select all <p> elements?",
    options: ["p {}", ".p {}", "#p {}", "*p {}"],
    correctAnswer: "p {}"
  },
  {
    category: "webdev",
    difficulty: "easy",
    question: "What is the default value of the position property?",
    options: ["fixed", "relative", "absolute", "static"],
    correctAnswer: "static"
  },
  {
    category: "webdev",
    difficulty: "easy",
    question: "Which selector targets an element with id main?",
    options: ["#main", ".main", "main", "$main"],
    correctAnswer: "#main"
  },
  {
    category: "webdev",
    difficulty: "easy",
    question: "How do you center a div horizontally with margin?",
    options: ["margin: auto;", "align: center;", "padding: center;", "margin: center;"],
    correctAnswer: "margin: auto;"
  },
  // Web Development Medium Questions
  {
    category: "webdev",
    difficulty: "medium",
    question: "Which keyword declares a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    correctAnswer: "const"
  },
  {
    category: "webdev",
    difficulty: "medium",
    question: "Which method adds a new element at the end of an array?",
    options: ["shift()", "pop()", "push()", "unshift()"],
    correctAnswer: "push()"
  },
  {
    category: "webdev",
    difficulty: "medium",
    question: "Which function converts string to integer?",
    options: ["parseInt()", "int()", "stringToInt()", "number()"],
    correctAnswer: "parseInt()"
  },
  {
    category: "webdev",
    difficulty: "medium",
    question: "What does event.preventDefault() do?",
    options: ["Stops execution", "Stops page reload", "Cancels default action", "Prevents function call"],
    correctAnswer: "Cancels default action"
  },
  {
    category: "webdev",
    difficulty: "medium",
    question: "Which method is used to add an event listener?",
    options: ["on()", "addEventListener()", "listen()", "eventBind()"],
    correctAnswer: "addEventListener()"
  },
  {
    category: "webdev",
    difficulty: "medium",
    question: "How do you create a new paragraph element in the DOM?",
    options: ["document.new('p')", "createElement('p')", "document.createElement('p')", "document.make('p')"],
    correctAnswer: "document.createElement('p')"
  },
  {
    category: "webdev",
    difficulty: "medium",
    question: "What does innerHTML return?",
    options: ["Tag name", "Element ID", "Element content", "Element styles"],
    correctAnswer: "Element content"
  },
  {
    category: "webdev",
    difficulty: "medium",
    question: "Which method is used to remove an element in the DOM?",
    options: ["delete()", "removeNode()", "removeChild()", "remove()"],
    correctAnswer: "remove()"
  },
  {
    category: "webdev",
    difficulty: "medium",
    question: "Which keyword defines a block-scoped variable?",
    options: ["var", "int", "let", "dim"],
    correctAnswer: "let"
  },
  {
    category: "webdev",
    difficulty: "medium",
    question: "How do you stop propagation of an event?",
    options: ["event.preventDefault()", "event.stop()", "event.stopPropagation()", "event.block()"],
    correctAnswer: "event.stopPropagation()"
  },

  // Web Development Hard Questions
  {
    category: "webdev",
    difficulty: "hard",
    question: "In React, what is a component?",
    options: ["Function or class returning JSX", "Plain HTML element", "CSS file", "Redux store"],
    correctAnswer: "Function or class returning JSX"
  },
  {
    category: "webdev",
    difficulty: "hard",
    question: "Which hook is used to manage state in React?",
    options: ["useEffect()", "useState()", "useRef()", "useRedux()"],
    correctAnswer: "useState()"
  },
  {
    category: "webdev",
    difficulty: "hard",
    question: "Angular uses which language for component logic?",
    options: ["Java", "JavaScript", "TypeScript", "HTML"],
    correctAnswer: "TypeScript"
  },
  {
    category: "webdev",
    difficulty: "hard",
    question: "Vue templates must return how many root elements?",
    options: ["Any number", "Exactly one", "Two", "Zero"],
    correctAnswer: "Exactly one"
  },
  {
    category: "webdev",
    difficulty: "hard",
    question: "Which React hook is used for side effects like API calls?",
    options: ["useFetch()", "useEffect()", "useState()", "useCallback()"],
    correctAnswer: "useEffect()"
  },
  {
    category: "webdev",
    difficulty: "hard",
    question: "What is the full form of API?",
    options: ["Advanced Programming Interface", "Application Programming Interface", "Automated Programming Instruction", "Applied Program Interaction"],
    correctAnswer: "Application Programming Interface"
  },
  {
    category: "webdev",
    difficulty: "hard",
    question: "Which HTTP method is used to send data?",
    options: ["GET", "PUT", "POST", "DELETE"],
    correctAnswer: "POST"
  },
  {
    category: "webdev",
    difficulty: "hard",
    question: "Which status code means “Not Found”?",
    options: ["200", "301", "404", "500"],
    correctAnswer: "404"
  },
  {
    category: "webdev",
    difficulty: "hard",
    question: "What format is most common for API responses?",
    options: ["XML", "JSON", "HTML", "CSV"],
    correctAnswer: "JSON"
  },
  {
    category: "webdev",
    difficulty: "hard",
    question: "What does CDN stand for?",
    options: ["Content Distribution Node", "Content Delivery Network", "Code Delivery Network", "Content Deployment Name"],
    correctAnswer: "Content Delivery Network"
  },


  // Math Easy Questions
  {
    category: "math",
    difficulty: "easy",
    question: "What is the sum of angles in a triangle?",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: "180°"
  },
  {
    category: "math",
    difficulty: "easy",
    question: "What is 7 times 8?",
    options: ["54", "56", "58", "60"],
    correctAnswer: "56"
  },
  {
    category: "math",
    difficulty: "easy",
    question: "Which is the largest single-digit prime number?",
    options: ["2", "3", "5", "7"],
    correctAnswer: "7"
  },
  {
    category: "math",
    difficulty: "easy",
    question: "What is (100 ÷ 25)?",
    options: ["2", "4", "6", "8"],
    correctAnswer: "4"
  },
  {
    category: "math",
    difficulty: "easy",
    question: "A square has how many sides?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    category: "math",
    difficulty: "easy",
    question: "What is the value of 8^0?",
    options: ["0", "1", "8", "64"],
    correctAnswer: "1"
  },
  {
    category: "math",
    difficulty: "easy",
    question: "What is the next number in the sequence: 2, 4, 6, 8, ...?",
    options: ["9", "10", "12", "14"],
    correctAnswer: "10"
  },
  {
    category: "math",
    difficulty: "easy",
    question: "If you have 5 apples and eat 2, how many are left?",
    options: ["2", "3", "5", "7"],
    correctAnswer: "3"
  },
  {
    category: "math",
    difficulty: "easy",
    question: "What is half of 1/4?",
    options: ["1/8", "1/4", "1/2", "1/6"],
    correctAnswer: "1/8"
  },
  {
    category: "math",
    difficulty: "easy",
    question: "How many minutes are in an hour?",
    options: ["10", "60", "80", "100"],
    correctAnswer: "60"
  },

  // Math Medium Questions
  {
    category: "math",
    difficulty: "medium",
    question: "What is - 15 + 15?",
    options: ["30", "18", "0", "-30"],
    correctAnswer: "0"
  },
  {
    category: "math",
    difficulty: "medium",
    question: "2500 ml = how many liters?",
    options: ["2 liters", "2.5 liters", "3 liters", "25 liters"],
    correctAnswer: "2.5 liters"
  },
  {
    category: "math",
    difficulty: "medium",
    question: "What is 761 x 28?",
    options: ["24713", "21308", "38210", "3721"],
    correctAnswer: "21308"
  },
  {
    category: "math",
    difficulty: "medium",
    question: "What is 76 x 6 - 24?",
    options: ["432", "463", "-992", "264"],
    correctAnswer: "432"
  },
  {
    category: "math",
    difficulty: "medium",
    question: "What is the sum of 130+125+191?",
    options: ["335", "456", "446", "426"],
    correctAnswer: "446"
  },
  {
    category: "math",
    difficulty: "medium",
    question: "50 times of 8 is equal to:",
    options: ["80", "400", "800", "4000"],
    correctAnswer: "400"
  },
  {
    category: "math",
    difficulty: "medium",
    question: "20+(90÷2) is equal to:",
    options: ["50", "55", "65", "60"],
    correctAnswer: "65"
  },
  {
    category: "math",
    difficulty: "medium",
    question: "The product of 82 and 5 is:",
    options: ["400", "410", "420", "None of these"],
    correctAnswer: "410"
  },
  {
    category: "math",
    difficulty: "medium",
    question: "Find the missing terms in multiple of 3: 3, 6, 9, __, 15",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12"
  },
  {
    category: "math",
    difficulty: "medium",
    question: "What is the next prime number after 5?",
    options: ["6", "7", "9", "11"],
    correctAnswer: "7"
  },

  // Math Hard Questions
  {
    category: "math",
    difficulty: "hard",
    question: "What is 0! (0 factorial)?",
    options: ["0", "Undefined", "1", "10"],
    correctAnswer: "1"
  },
  {
    category: "math",
    difficulty: "hard",
    question: "What is the largest two-digit prime number?",
    options: ["93", "91", "97", "89"],
    correctAnswer: "97"
  },
  {
    category: "math",
    difficulty: "hard",
    question: "What is the value of i^2 (where i is the imaginary unit)?",
    options: ["1", "-1", "i", "0"],
    correctAnswer: "-1"
  },
  {
    category: "math",
    difficulty: "hard",
    question: "What is 5% of 200?",
    options: ["5", "15", "20", "10"],
    correctAnswer: "10"
  },
  {
    category: "math",
    difficulty: "hard",
    question: "What is the result of any number raised to the power of 0?",
    options: ["0", "The number itself", "1", "Cannot be determined"],
    correctAnswer: "1"
  },
  {
    category: "math",
    difficulty: "hard",
    question: "How many sides does a decagon have?",
    options: ["10", "8", "12", "6"],
    correctAnswer: "10"
  },
  {
    category: "math",
    difficulty: "hard",
    question: "What is the sum of the interior angles of a pentagon?",
    options: ["180°", "360°", "540°", "720°"],
    correctAnswer: "540°"
  },
  {
    category: "math",
    difficulty: "hard",
    question: "Is a triangle a two-dimensional or three-dimensional shape?",
    options: ["Three-dimensional", "Two-dimensional", "Both", "Neither"],
    correctAnswer: "Two-dimensional"
  },
  {
    category: "math",
    difficulty: "hard",
    question: "What is the base of the binary number system?",
    options: ["10", "2", "8", "16"],
    correctAnswer: "2"
  },
  {
    category: "math",
    difficulty: "hard",
    question: "What is the binary equivalent of the decimal number 10?",
    options: ["1010", "1100", "1000", "1111"],
    correctAnswer: "1010"
  },


  // GK Easy Questions
  {
    category: "gk",
    difficulty: "easy",
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    correctAnswer: "Delhi"
  },
  {
    category: "gk",
    difficulty: "easy",
    question: "What animal is the national symbol of Australia?",
    options: ["Kangaroo", "Koala", "Emu", "Crocodile"],
    correctAnswer: "Kangaroo"
  },
  {
    category: "gk",
    difficulty: "easy",
    question: "In what year was the first international modern Olympiad held?",
    options: ["1896", "1900", "1912", "1924"],
    correctAnswer: "1896"
  },
  {
    category: "gk",
    difficulty: "easy",
    question: "How many bones are in the body of an adult human?",
    options: ["330", "206", "250", "210"],
    correctAnswer: "206"
  },
  {
    category: "gk",
    difficulty: "easy",
    question: " What chemical element is used in the manufacture of glass?",
    options: ["Silver", "Sodium", "Silicone", "Oxygen"],
    correctAnswer: "Silicone"
  },
  {
    category: "gk",
    difficulty: "easy",
    question: "What chemical element is the main component of carbon dioxide (CO2)?",
    options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
    correctAnswer: "Carbon"
  },
  {
    category: "gk",
    difficulty: "easy",
    question: "What year was the Olympic Organization founded?",
    options: ["1886", "1896", "1900", "1912"],
    correctAnswer: "1896"
  },
  {
    category: "gk",
    difficulty: "easy",
    question: "What chemical element is the main component of human bones and teeth?",
    options: ["Calcium", "Iron", "Sodium", "Magnesium"],
    correctAnswer: "Calcium"
  },
  {
    category: "gk",
    difficulty: "easy",
    question: "Which organ in the human body is responsible for filtering blood and producing urine?",
    options: ["Heart", "Liver", "Kidneys", "Spleen"],
    correctAnswer: "Kidneys"
  },
  {
    category: "gk",
    difficulty: "easy",
    question: "Which planet in the solar system has the largest diameter?",
    options: ["Mercury", "Venus", "Earth", "Jupiter"],
    correctAnswer: "Jupiter"
  },

  // GK Medium Questions
  {
    category: "gk",
    difficulty: "medium",
    question: "Who wrote the Indian national anthem?",
    options: ["Rabindranath Tagore", "Mahatma Gandhi", "Sarojini Naidu", "Subhas Chandra Bose"],
    correctAnswer: "Rabindranath Tagore"
  },
  {
    category: "gk",
    difficulty: "medium",
    question: "What is the hardest natural substance on Earth?",
    options: ["Iron", "Diamond", "Gold", "Granite"],
    correctAnswer: "Diamond"
  },
  {
    category: "gk",
    difficulty: "medium",
    question: "What chemical element is used in the manufacture of batteries?",
    options: ["Lead", "Copper", "Aluminum", "Lithium"],
    correctAnswer: "Lithium"
  },
  {
    category: "gk",
    difficulty: "medium",
    question: "What type of radiation allows X-ray examinations?",
    options: ["Ultrasound", "Radioactivity", "Infrared", "X-ray"],
    correctAnswer: "X-ray"
  },
  {
    category: "gk",
    difficulty: "medium",
    question: "Which planet in the solar system is known as the “Blue Planet”?",
    options: ["Venus", "Earth", "Uranus", "Neptune"],
    correctAnswer: "Earth"
  },
  {
    category: "gk",
    difficulty: "medium",
    question: "In what year did the first man land on the moon?",
    options: ["1961", "1969", "1975", "1983"],
    correctAnswer: "1969"
  },
  {
    category: "gk",
    difficulty: "medium",
    question: " In an adult human body, the total number of red blood cells is",
    options: ["15 trillion", "20 trillion", "25 trillion", "30 trillion"],
    correctAnswer: "30 trillion"
  },
  {
    category: "gk",
    difficulty: "medium",
    question: "How many times has Brazil won the World Cup?",
    options: ["4", "2", "5", "1"],
    correctAnswer: "5"
  },
  {
    category: "gk",
    difficulty: "medium",
    question: "How many players are there on each side of the Basketball game?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5"
  },
  {
    category: "gk",
    difficulty: "medium",
    question: "Which animal is known to be the ‘Ship of the Desert”?",
    options: ["Dog", "Camel", "Cat", "Snake"],
    correctAnswer: "Camel"
  },

  // GK Hard Questions
  {
    category: "gk",
    difficulty: "hard",
    question: "Who was the first person to walk on the moon?",
    options: ["Yuri Gagarin", "Neil Armstrong", "John Glenn", "Buzz Aldrin"],
    correctAnswer: "Neil Armstrong"
  },
  {
    category: "gk",
    difficulty: "hard",
    question: "Which country was divided into two parts by the Wall?",
    options: ["France", "Germany", "Austria", "Poland"],
    correctAnswer: "Germany"
  },
  {
    category: "gk",
    difficulty: "hard",
    question: "Which city is the capital of Italy?",
    options: ["Venice", "Florence", "Rome", "Milan"],
    correctAnswer: "Rome"
  },
  {
    category: "gk",
    difficulty: "hard",
    question: "What social network used “stories” first?",
    options: ["VKontakte", "Facebook", "Instagram", "Twitter"],
    correctAnswer: "Instagram"
  },
  {
    category: "gk",
    difficulty: "hard",
    question: "Which of these buildings is in India?",
    options: ["Eiffel Tower", "Colosseum", "Taj Mahal", "Great Wall of China"],
    correctAnswer: "Taj Mahal"
  },
  {
    category: "gk",
    difficulty: "hard",
    question: "Which of the following inventions is attributed to Thomas Edison?",
    options: ["Bulb", "Telephone", "Computer", "Rocket"],
    correctAnswer: "Bulb"
  },
  {
    category: "gk",
    difficulty: "hard",
    question: "What animal is the symbol of China?",
    options: ["Panda", "Elephant", "Tiger", "Leo"],
    correctAnswer: "Panda"
  },
  {
    category: "gk",
    difficulty: "hard",
    question: "Who was the first President of the USA?",
    options: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
    correctAnswer: "George Washington"
  },
  {
    category: "gk",
    difficulty: "hard",
    question: "Which of these animals cannot jump?",
    options: ["Cat", "Horse", "Snake", "Kangaroo"],
    correctAnswer: "Snake"
  },
  {
    category: "gk",
    difficulty: "hard",
    question: "Which city is the capital of Russia?",
    options: ["St. Petersburg", "Kazan", "Sochi", "Moscow"],
    correctAnswer: "Moscow"
  }
];

// state
let currentQuestionIndex = 0;
let filteredQuestions = [];
let score = 0;
let userAnswers = []; // { question, selected, correct }

function startQuiz() {
  const category = document.getElementById("category").value;
  const difficulty = document.getElementById("difficulty").value;

  filteredQuestions = quizData.filter(q =>
    q.category === category && q.difficulty === difficulty
  );

  if (!filteredQuestions.length) {
    alert("No questions found for selected category/difficulty.");
    return;
  }

  filteredQuestions = shuffleArray(filteredQuestions);

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("result-screen").classList.add("hidden");

  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  showQuestion();
}

function showQuestion() {
  const question = filteredQuestions[currentQuestionIndex];
  document.getElementById("question-text").textContent = question.question;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  // shuffle options so order changes each time
  const shuffledOptions = shuffleArray([...question.options]);

  shuffledOptions.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    // use textContent to safely show < and >
    button.textContent = option;
    // when clicked, mark selected and set dataset.correct
    button.addEventListener("click", () => selectOption(button, option));
    optionsContainer.appendChild(button);
  });

  // disable Next until an option is chosen
  document.getElementById("next-btn").disabled = true;

  updateProgressBar();
}

function selectOption(button, selectedAnswer) {
  // remove previous selection style
  const allButtons = document.querySelectorAll("#options-container button");
  allButtons.forEach(btn => {
    btn.classList.remove("selected");
    // clear any previous dataset.correct to avoid stale values
    btn.removeAttribute("data-correct");
  });

  // mark clicked button
  button.classList.add("selected");
  const correctAnswer = filteredQuestions[currentQuestionIndex].correctAnswer;

  // set dataset.correct as string "true"/"false"
  button.dataset.correct = (selectedAnswer === correctAnswer) ? "true" : "false";

  // enable Next
  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  const selectedButton = document.querySelector("#options-container .selected");
  const currentQ = filteredQuestions[currentQuestionIndex];

  let selectedText = "Not Answered";
  let wasCorrect = false;

  if (selectedButton) {
    selectedText = selectedButton.textContent;
    wasCorrect = selectedButton.dataset.correct === "true";
  }

  // store user's answer for summary
  userAnswers.push({
    question: currentQ.question,
    selected: selectedText,
    correct: currentQ.correctAnswer
  });

  if (wasCorrect) score++;

  currentQuestionIndex++;
  if (currentQuestionIndex < filteredQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  document.getElementById("score-text").textContent =
    `You scored ${score} out of ${filteredQuestions.length}!`;

  const percentage = (score / filteredQuestions.length) * 100;
  let feedback = "";
  if (percentage >= 80) feedback = "Excellent! You’ve mastered this quiz. 🎉";
  else if (percentage >= 50) feedback = "Good job! Keep practicing to improve. 💪";
  else feedback = "Needs improvement. Don’t give up — keep learning! 📚";

  document.getElementById("feedback").textContent = feedback;

  // prepare View Answers button
  const viewBtn = document.getElementById("view-answers");
  const answersBox = document.getElementById("answers-summary");

  // reset answers box
  answersBox.classList.add("hidden");
  answersBox.innerHTML = "";
  viewBtn.textContent = "View Answers";

  // attach handler (ensure single handler)
  viewBtn.onclick = () => {
    const nowHidden = answersBox.classList.toggle("hidden");
    viewBtn.textContent = nowHidden ? "View Answers" : "Hide Answers";

    if (!nowHidden) {
      // populate answersBox
      answersBox.innerHTML = "";
      for (let i = 0; i < filteredQuestions.length; i++) {
        const ua = userAnswers[i] || { question: filteredQuestions[i].question, selected: "Not Answered", correct: filteredQuestions[i].correctAnswer };

        const card = document.createElement("div");
        card.className = "answer-card";
        card.style.marginBottom = "10px";
        card.style.padding = "10px 10px 10px 25px";
        card.style.border = "1px solid #eee";
        card.style.borderRadius = "6px";
        card.style.background = "#fff";

        const qEl = document.createElement("h4");
        qEl.textContent = `Q${i + 1}: ${ua.question}`;
        card.appendChild(qEl);

        const yourP = document.createElement("p");
        const yourStrong = document.createElement("strong");
        yourStrong.textContent = "Your Answer: ";
        yourP.appendChild(yourStrong);
        const yourSpan = document.createElement("span");
        yourSpan.textContent = ua.selected;
        yourSpan.style.color = (ua.selected === ua.correct) ? "green" : "red";
        yourP.appendChild(yourSpan);
        card.appendChild(yourP);

        const corrP = document.createElement("p");
        const corrStrong = document.createElement("strong");
        corrStrong.textContent = "Correct Answer: ";
        corrP.appendChild(corrStrong);
        const corrSpan = document.createElement("span");
        corrSpan.textContent = ua.correct;
        corrSpan.style.color = "green";
        corrP.appendChild(corrSpan);
        card.appendChild(corrP);

        answersBox.appendChild(card);
      }
    }
  };
}

function updateProgressBar() {
  if (!filteredQuestions.length) {
    document.getElementById("progress-bar").style.width = "0%";
    return;
  }
  // progress shows how many questions completed (before current)
  const progress = (currentQuestionIndex / filteredQuestions.length) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// optional: expose functions for debugging in console
window._quiz = {
  startQuiz, showQuestion, nextQuestion, getState: () => ({ currentQuestionIndex, filteredQuestionsLength: filteredQuestions.length, score, userAnswers })
};
