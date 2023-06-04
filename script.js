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
    },
    {
        question: "How many member's in BIHAR vidhan sabha?",
        answers: [
            { text: "239", correct: false },
            { text: "240", correct: false },
            { text: "241", correct: false },
            { text: "242", correct: true }
        ]
    },
    {
        question: "How many member's in BIHAR lok sabha?",
        answers: [
            { text: "38", correct: false },
            { text: "39", correct: false },
            { text: "40", correct: true },
            { text: "41", correct: false }
        ]
    },
    {
        question: "In which year did BIHAR state establish?",
        answers: [
            { text: "1 APRIL 1933", correct: false },
            { text: "1 APRIL 1934", correct: false },
            { text: "1 APRIL 1935", correct: false },
            { text: "1 APRIL 1936", correct: true }
        ]
    },
    {
        question: "Which is the INDIA smallest contry?",
        answers: [
            { text: "DELHI", correct: false },
            { text: "UP", correct: false },
            { text: "MP", correct: false },
            { text: "SIKKIM", correct: true }
        ]
    },
    {
        question: "In which year does submarine invented?",
        answers: [
            { text: "1764", correct: false },
            { text: "1765", correct: false },
            { text: "1766", correct: true },
            { text: "1767", correct: false }
        ]
    },
    {
        question: "In which year does Fountain pen invented?",
        answers: [
            { text: "1841",correct: false },
            { text: "1842", correct: false },
            { text: "1843", correct: false },
            { text: "1844", correct: true }
        ]
    },
    {
        question: "In which year does Balloon invented?",
        answers: [
            { text: "1781", correct: false },
            { text: "1782", correct: false },
            { text: "1783", correct: true },
            { text: "1784", correct: false }
        ]
    },
    {
        question: "In which year does Lamp invented?",
        answers: [
            { text: "1877", correct: false },
            { text: "1878", correct: false },
            { text: "1879", correct: true },
            { text: "1880", correct: false }
        ]
    },
    {
        question: "How many types of passenger's coache are distributed?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ]
    },
    {
        question: "How many types of coaches in railway?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "Which type of currency run in Japan?",
        answers: [
            { text: "POUND", correct: false },
            { text: "DOLLER", correct: false },
            { text: "YEN", correct: true },
            { text: "RUPPEES", correct: false }
        ]
    },
    {
        question: "Which type of currency runs in BANGLADESH?",
        answers: [
            { text: "WON", correct: false },
            { text: "YEN", correct: false },
            { text: "REED", correct: false },
            { text: "TAKKA", correct: true }
        ]
    },
    {
        question: "Which type of currency runs in BANGLADESH?",
        answers: [
            { text: "WON", correct: false },
            { text: "YEN", correct: false },
            { text: "REED", correct: false },
            { text: "TAKKA", correct: true }
        ]
    },
    {
        question: "How many types of  passenger coaches?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true }
        ]  
    },
];

    const quizContainer = document.getElementById("quiz-container");
    const questionContainer = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const quizTitle = document.getElementById("quiz-title");
    const quizForm = document.querySelector("#quiz-form");
    const resultMessage = document.querySelector("#result-message");

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
                        score += 1
                        if (correct) {
                            scoreBox.innerHTML = "Score: " + score;;
                        }
                        if (currentQuestionIndex < questions.length - 1) {
                        nextButton.style.display = "block";
                        document.addEventListener("DOMContentLoaded", () => {
                            const button = document.querySelector("#my-button");
                          
                            button.addEventListener("click", () => {
                              // Do something when the button is clicked
                            });
                          });
                          
                          quizForm.addEventListener("submit", function(event) {
                            // Prevent the default form submission behavior
                            event.preventDefault();
                          
                            // Get the user's answer from the form input element
                            const userAnswer = quizForm.elements["answer"].value;
                          
                            // Check if the user's answer is correct
                            if (userAnswer === answer) {
                              // If the answer is correct, display a success message
                              resultMessage.textContent = "Congratulations! You got it right!";
                            } else {
                              // If the answer is wrong, display a failure message and end the quiz
                              resultMessage.textContent = "Game Over. Sorry, you got it wrong.";
                              quizForm.elements["answer"].disabled = true; // Disable the form input
                              quizForm.elements["submit"].disabled = true; // Disable the form submit button
                            }
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