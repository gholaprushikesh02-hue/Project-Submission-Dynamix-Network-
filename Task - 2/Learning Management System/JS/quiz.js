(function () {

    const quizData = {
        html: [
            {
                q: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tool Markup Level", "Home Tool Markup Language"],
                answer: 0
            },
            {
                q: "Which tag is used to insert an image?",
                options: ["<image>", "<img>", "<pic>"],
                answer: 1
            },
            {
                q: "Which tag creates a hyperlink?",
                options: ["<link>", "<a>", "<href>"],
                answer: 1
            },
            {
                q: "Which HTML tag is used for the largest heading?",
                options: ["<h6>", "<head>", "<h1>"],
                answer: 2
            },
            {
                q: "Which tag is used to create a table row?",
                options: ["<td>", "<tr>", "<th>"],
                answer: 1
            },
            {
                q: "Which tag is used for a line break?",
                options: ["<break>", "<lb>", "<br>"],
                answer: 2
            },
            {
                q: "Which attribute sets an image’s alternate text?",
                options: ["alt", "title", "text"],
                answer: 0
            },
            {
                q: "Which tag is used to define a paragraph?",
                options: ["<para>", "<p>", "<pg>"],
                answer: 1
            },
            {
                q: "Which tag defines an unordered list?",
                options: ["<ol>", "<li>", "<ul>"],
                answer: 2
            },
            {
                q: "Which tag is used for input fields?",
                options: ["<input>", "<textbox>", "<field>"],
                answer: 0
            }
        ],
        css: [
            {
                q: "Which property changes text color?",
                options: ["font-style", "text-color", "color"],
                answer: 2
            },
            {
                q: "Which property changes background color?",
                options: ["bgcolor", "background-color", "background-style"],
                answer: 1
            },
            {
                q: "Which CSS property changes font size?",
                options: ["text-size", "font-size", "size"],
                answer: 1
            },
            {
                q: "Which selector targets an element by ID?",
                options: [".idname", "#idname", "id(idname)"],
                answer: 1
            },
            {
                q: "Which property makes text bold?",
                options: ["font-weight", "bold", "text-bold"],
                answer: 0
            },
            {
                q: "Which property controls spacing inside elements?",
                options: ["margin", "padding", "border"],
                answer: 1
            },
            {
                q: "Which property controls text alignment?",
                options: ["align", "text-style", "text-align"],
                answer: 2
            },
            {
                q: "Which CSS property sets border size?",
                options: ["border-width", "border-size", "border-height"],
                answer: 0
            },
            {
                q: "Which property makes corners rounded?",
                options: ["corner-radius", "border-radius", "round-corner"],
                answer: 1
            },
            {
                q: "Which display type makes elements align horizontally?",
                options: ["block", "inline-block", "hide"],
                answer: 1
            }
        ],
        js: [
            {
                q: "Inside which tag do we write JavaScript?",
                options: ["<js>", "<javascript>", "<script>"],
                answer: 2
            },
            {
                q: "Which is used to declare a variable?",
                options: ["var", "int", "string"],
                answer: 0
            },
            {
                q: "Which operator is used for addition?",
                options: ["+", "-", "*"],
                answer: 0
            },
            {
                q: "Which method prints output in console?",
                options: ["print()", "console.log()", "log.print()"],
                answer: 1
            },
            {
                q: "Which data type stores true/false?",
                options: ["boolean", "string", "float"],
                answer: 0
            },
            {
                q: "Which symbol starts a comment in JS?",
                options: ["//", "/* */", "<!-- -->"],
                answer: 0
            },
            {
                q: "Which method converts a string to number?",
                options: ["parseInt()", "toNumber()", "int()"],
                answer: 0
            },
            {
                q: "Which keyword stops a loop?",
                options: ["stop", "exit", "break"],
                answer: 2
            },
            {
                q: "What does DOM stand for?",
                options: ["Document Object Model", "Data Object Machine", "Display Object Method"],
                answer: 0
            },
            {
                q: "Which keyword defines a constant?",
                options: ["let", "var", "const"],
                answer: 2
            }
        ]
    };

    // Elements
    const selectBox = document.getElementById("quiz-select");
    const startBtn = document.getElementById("start-quiz");
    const quizStart = document.getElementById("quiz-start");

    const quizBox = document.getElementById("quiz-box");
    const qText = document.getElementById("q-text");
    const qOptions = document.getElementById("q-options");
    const nextBtn = document.getElementById("next-q");
    const progressBar = document.getElementById("progress-bar");

    const resultBox = document.getElementById("result-box");
    const scoreText = document.getElementById("score-text");
    const feedbackEl = document.getElementById("feedback");
    const viewAnswersBtn = document.getElementById("view-answers");
    const answersSummary = document.getElementById("answers-summary");

    // State
    let questions = [];
    let currentIndex = 0;
    let score = 0;
    let selectedAns = null;
    // store user answers as objects {question, selected (string), correct (string)}
    let userAnswers = [];

    // START quiz
    startBtn.addEventListener("click", () => {
        const course = selectBox.value;
        if (!course) {
            alert("Please select a topic.");
            return;
        }

        questions = quizData[course] || [];

        if (!questions.length) {
            alert("No quiz available!");
            return;
        }

        // reset state
        currentIndex = 0;
        score = 0;
        selectedAns = null;
        userAnswers = [];

        // show quiz
        quizStart.classList.add("hidden");
        quizBox.classList.remove("hidden");
        resultBox.classList.add("hidden");
        answersSummary.classList.add("hidden");
        viewAnswersBtn.textContent = "View Answers";

        loadQuestion();
    });

    // load question
    function loadQuestion() {
        const q = questions[currentIndex];
        qText.textContent = q.q;

        qOptions.innerHTML = "";
        selectedAns = null;
        nextBtn.disabled = true;

        q.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            // use textContent so tags like <a> show as text
            btn.textContent = opt;
            btn.type = "button";

            btn.addEventListener("click", () => {
                // remove selected from previous
                document.querySelectorAll("#q-options .option-btn").forEach(b => b.classList.remove("selected"));
                // mark this
                btn.classList.add("selected");
                // save index
                selectedAns = idx;
                nextBtn.disabled = false;
            });

            qOptions.appendChild(btn);
        });

        // update progress bar (1-based)
        const percent = Math.round(((currentIndex) / questions.length) * 100);
        progressBar.style.width = `${percent}%`;
    }

    // next question handler
    nextBtn.addEventListener("click", () => {
        const q = questions[currentIndex];

        // store answer - store actual option text (so view answers can display safely)
        const selectedText = (selectedAns !== null && selectedAns !== undefined)
            ? q.options[selectedAns]
            : ""; // empty string for skipped

        userAnswers.push({
            question: q.q,
            selected: selectedText,
            correct: q.options[q.answer]
        });

        // scoring
        if (selectedAns === q.answer) score++;

        currentIndex++;

        if (currentIndex < questions.length) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    });

    function finishQuiz() {
        quizBox.classList.add("hidden");
        resultBox.classList.remove("hidden");

        scoreText.textContent = `You scored ${score} out of ${questions.length}`;

        const percentage = Math.round((score / questions.length) * 100);
        let feedback = "";
        if (percentage >= 80) feedback = "Excellent! You’ve mastered this quiz. 🎉";
        else if (percentage >= 50) feedback = "Good job! Keep practicing to improve. 💪";
        else feedback = "Needs improvement. Don’t give up — keep learning! 📚";
        if (feedbackEl) feedbackEl.textContent = feedback;

        // ensure answersSummary is cleared and ready
        answersSummary.innerHTML = "";
        answersSummary.classList.add("hidden");
        viewAnswersBtn.textContent = "View Answers";
    }

    // View Answers logic — safe rendering and guarantees an entry for every question
    if (viewAnswersBtn) {
        viewAnswersBtn.addEventListener("click", () => {
            // toggle visibility
            const nowHidden = answersSummary.classList.toggle("hidden");
            viewAnswersBtn.textContent = nowHidden ? "View Answers" : "Hide Answers";

            // if we just showed it, build the summary
            if (!nowHidden) {
                answersSummary.innerHTML = "";

                // If userAnswers shorter than questions (shouldn't happen normally), create defaults
                for (let i = 0; i < questions.length; i++) {
                    const q = questions[i];
                    const ua = userAnswers[i] || { question: q.q, selected: "", correct: q.options[q.answer] };

                    const card = document.createElement("div");
                    card.className = "answer-box";

                    // Question
                    const h = document.createElement("h4");
                    h.textContent = `Q${i + 1}: ${ua.question}`;
                    card.appendChild(h);

                    // Your Answer (use textContent)
                    const pYour = document.createElement("p");
                    const strongYour = document.createElement("strong");
                    strongYour.textContent = "Your Answer: ";
                    pYour.appendChild(strongYour);
                    const spanYour = document.createElement("span");
                    spanYour.textContent = ua.selected || "Not Selected";
                    spanYour.style.color = (ua.selected === ua.correct) ? "green" : "red";
                    pYour.appendChild(spanYour);
                    card.appendChild(pYour);

                    // Correct Answer
                    const pCorr = document.createElement("p");
                    const strongCorr = document.createElement("strong");
                    strongCorr.textContent = "Correct Answer: ";
                    pCorr.appendChild(strongCorr);
                    const spanCorr = document.createElement("span");
                    spanCorr.textContent = ua.correct;
                    spanCorr.style.color = "green";
                    pCorr.appendChild(spanCorr);
                    card.appendChild(pCorr);

                    answersSummary.appendChild(card);
                }
            }
        });
    }

    // expose for debugging (optional)
    window._quiz_debug = () => ({ questions, currentIndex, score, userAnswers });

})();
