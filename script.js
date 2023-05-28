const questions = [
    {
        question: "What was first battle royale game?",
        answers: [
            { text: "Free Fire", correct: false },
            { text: "Z1 Battle Royale", correct: true },
            { text: "BGMI", correct: false },
            { text: "UGW", correct: false }
        ]
    },
    {
        question: "When did first battle of panipat war started?",
        answers: [
            { text: "21 April 1526", correct: true },
            { text: "21 April 1523", correct: false },
            { text: "21 April 1524", correct: false },
            { text: "21 April 1514", correct: false }
        ]
    },
    {
        question: "In INDIA how much part of land seprated?",
        answers: [
            { text: "5", correct: true },
            { text: "4", correct: false },
            { text: "3", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "How much river come from himalaya in INDIA?",
        answers: [
            { text: "4", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "How much main river from WEST INDIA?",
        answers: [
            { text: "11", correct: false },
            { text: "12", correct: false },
            { text: "13", correct: true },
            { text: "14", correct: false }
        ]
    },
    {
        question: "How much population of JHARKHAND?",
        answers: [
            { text: "2,66,09,428", correct: false },
            { text: "2,67,09,428", correct: false },
            { text: "2,68,09,428", correct: false },
            { text: "2,69,09,428", correct: true }
        ]
    },
    {  question: "Which river is the longest river in INDIA?",
       answers: [
        { text: "GANGA", correct: true },
        { text: "YAMUNA", correct: false },
        { text: "NARMADA", correct: false },
        { text: "GODAWARI", correct: false }
    ] 
    },
    {
        question: "In which year does INDIA first Train will run?",
        answers: [
            { text: "1850", correct: false },
            { text: "1851", correct: false },
            { text: "1852", correct: false },
            { text: "1853", correct: true }
        ]
    },
    {
        question: "Which direction is bigger in indian railway?",
        answers: [
            { text: "NORTH", correct: false },
            { text: "SOUTH", correct: false },
            { text: "EAST", correct: true },
            { text: "WEST", correct: false }
        ]
    },
    {
        question: "In which place were GANGA river meet?",
        answers: [
            { text: "AHLABAAD", correct: false },
            { text: "BIHAR", correct: false },
            { text: "SIKHIM", correct: false },
            { text: "ILLABAAD", correct: true }
        ]
    },
    {
        question: "In which which stae does GANGA river cross and then meet in BANGLADESH?",
        answers: [
            { text: "UP,BIHAR AND MUMBAI", correct: false },
            { text: "UP,BIHAR AND AGRA", correct: false },
            { text: "UP,BIHAR AND WEST BENGAL", correct: true },
            { text: "UP,BIHAR AND DELHI", correct: false }
        ]
    },
    {
        question: "IN which state does SATABDI EXPRESS run?",
        answers: [
            { text: "NEW DELHI TO BIHAR", correct: false },
            { text: "NEW DELHI TO UP", correct: false },
            { text: "NEW DELHI TO BHOPAL", correct: true },
            { text: "NEW DELHI TO AGRA", correct: false }
        ]
    }
];

    const quizContainer = document.getElementById("quiz-container");
    const questionContainer = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const quizTitle = document.getElementById("quiz-title");

    let currentQuestionIndex = 0;
    let score = 0;

    startQuiz();

    function shuffle(array) {
        // define the shuffle function
      }
      
      function setNextQuestion() {
        // define the setNextQuestion function
      }
      
      function startQuiz() {
        quizTitle.innerText = "Quiz App" ;
        nextButton.style.display = "none";
        score = 0;
        currentQuestionIndex = 0;
        shuffle(questions);
        setNextQuestion();
      }

        function setNextQuestion() {
            resetState();
            showQuestion(questions[currentQuestionIndex]);
            }

            const question = document.getElementById('question');
            const answerButtons = document.getElementById('answer-buttons');
            nextButton.addEventListener('click', () => {
                currentQuestionIndex++;
                setNextQuestion();
            });
            
            function setNextQuestion() {
                resetState();
                showQuestion(questions[currentQuestionIndex]);
            }
            
            function showQuestion(question) {
                questionElement.innerText = question.question;
                question.answers.forEach(answer => {
                    const button = document.createElement('button');
                    button.innerText = answer.text;
                    button.classList.add('btn');
                    if (answer.correct) {
                        button.dataset.correct = answer.correct;
                    }
                    button.addEventListener('click', selectAnswer);
                    answerButtons.appendChild(button);
                });
            }
            
            function resetState() {
                clearStatusClass(document.body);
                nextButton.classList.add('hide');
                while (answerButtons.firstChild) {
                    answerButtons.removeChild(answerButtons.firstChild);
                }
            }
            
            function selectAnswer(e) {
                const selectedButton = e.target;
                const correct = selectedButton.dataset.correct;
                setStatusClass(document.body, correct);
                Array.from(answerButtons.children).forEach(button => {
                    setStatusClass(button, button.dataset.correct);
                });
                if (currentQuestionIndex === questions.length - 1) {
                    nextButton.innerText = 'Finish';
                }
                if (currentQuestionIndex < questions.length - 1) {
                    nextButton.classList.remove('hide');
                } else {
                    nextButton.innerText = 'Restart';
                    nextButton.classList.remove('hide');
                    currentQuestionIndex = -1;
                }
            }
            
            function setStatusClass(element, correct) {
                clearStatusClass(element);
                if (correct) {
                    element.classList.add('correct');
                } else {
                    element.classList.add('wrong');
                }
            }
            
            function clearStatusClass(element) {
                element.classList.remove('correct');
                element.classList.remove('wrong');
            }
            
           
            function showQuestion(question) {
                questionElement.innerText = question.question;
                question.answers.forEach(answer => {
                const button = document.createElement("button");
                button.innerText = answer.text;
                button.classList.add("btn");
                if (answer.correct) {
                button.dataset.correct = answer.correct;
                }
                button.addEventListener("click", selectAnswer);
                answerButtonsElement.appendChild(button);
                });
                }

                function resetState() {
                    clearStatusClass(document.body);
                    nextButton.style.display = "none";
                    while (answerButtonsElement.firstChild) {
                    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
                    }
                    }
                    function selectAnswer(event) {
                        const selectedButton = event.target;
                        const correct = selectedButton.dataset.correct;
                        function setStatusClass(element, correct) {
                            clearStatusClass(element);
                            if (correct) {
                                element.classList.add('correct');
                            } else {
                                element.classList.add('wrong');
                            }
                        }                        
                        Array.from(answerButtonsElement.children).forEach(button => {
                        setStatusClass(button, button.dataset.correct);
                        });
                        if (correct) {
                        score++;
                        }
                        if (currentQuestionIndex < questions.length - 1) {
                        nextButton.style.display = "block";
                        document.addEventListener("DOMContentLoaded", () => {
                            const button = document.querySelector("#my-button");
                          
                            button.addEventListener("click", () => {
                              // Do something when the button is clicked
                            });
                          });
                          
                        
                          const element = document.querySelector("#my-element");
                          if (element) {
                            element.classList.add("highlight");
                          }
                          
                        };
                        }

                        function clearStatusClass(element) {
                            element.classList.remove("correct");
                            element.classList.remove("wrong");
                            }

                            function shuffle(array) {
                                for (let i = array.length - 1; i > 0; i--) {
                                const j = Math.floor(Math.random() * (i + 1));
                                [array[i], array[j]] = [array[j], array[i]];
                                }
                                }
