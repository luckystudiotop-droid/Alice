document.addEventListener('DOMContentLoaded', () => {

   
    const questions = [
        {
            question: "Хто насправді виявився Рожевим Алмазом?",
            answers: ["A) Гранат", "B) Роза Кварц ", "C) Жовтий Алмаз", "D) Перламутр"],
            correct: 1
        },
        {
            question: "Яка планета була першою (і єдиною) колонією Рожевого Алмазу?",
            answers: ["A) Марс", "B) Рідний Світ (Homeworld)", "C) Земля", "D) Венера"],
            correct: 2
        },
        {
            question: "Який предмет належить Рожевому Алмазу і може зберігати речі всередині свого виміру?",
            answers: ["A) Сумка", "B) Лев", "C) Щит", "D) Меч"],
            correct: 1
        },{
            question: "Як звали вірну Перл (Перлину) Рожевого Алмазу до того, як вона потрапила на Землю?",
            answers: ["A) Рожева Перлина", "B) Синя Перлина", "C) Жовта Перлина", "D) Яшма"],
            correct: 0
        },{
            question: "Яку унікальну здатність мала Рожевий Алмаз (і пізніше Стівен)?",
            answers: ["A) Контроль вогню", "B) Зцілення (сльозами або слиною)", "C) Читання думок", "D) Невидимість"],
            correct: 1
        },{
            question: "Хто «розколов» Рожевий Алмаз за офіційною версією Інкрустації",
            answers: ["A) Жовтий Алмаз", "B) Стівен", "C) Роза Кварц", "D) Вісмут"],
            correct: 2
        },
        
        
    ];
    const questionTitle = document.querySelector('#question-text')
    const answersContainer = document.querySelector('#answer-container')
    
    const startScreen = document.querySelector('#start-screen')
    const quizScreen = document.querySelector('#quiz-screen')
    
    const resultScreen = document.querySelector('#result-screen')
    const startButton = document.querySelector('#start-btn')
    const restartButton = document.querySelector('#restart-btn')
    
    const resultText = document.querySelector('.result-text')
    const timerDisplay = document.querySelector('#timer')
    const scoreBar = document.querySelector('#score-display')
    
    let questionIndex = 0
    let score = 0
    
    function showQuestion(question){
        answersContainer.innerHTML = ''
        
        questionTitle.innerText = question.question
        for (let i = 0; i < question.answers.length; i++){
            const button = document.createElement('button')
            button.classList.add('answer-btn')
            button.innerText = question.answers[i]
            button.addEventListener('click', function(){
                 checkAnswer(button,i)
                 
            })
            answersContainer.appendChild(button)
        }
    }
    showQuestion(questions[questionIndex])
    
    function checkAnswer(button, answerIndex){
        if (answerIndex == questions[questionIndex].correct){
            score++;
            button.classList.add('correct')
            scoreBar.innerText= "Бали: " + score
        }else{
            button.classList.add('wrong')
        }
        setTimeout(nextQuestion, 1000)
    }
    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length){
            showQuestion(questions[questionIndex])
           
        }else{
            showResult()
        }
        
    }
    
    function showResult(){
       quizScreen.classList.add('hide')
       startScreen.classList.add('hide')
       resultScreen.classList.remove('hide')
       
       const accuracy = Math.round((score / questions.length) * 100)
       resultText.innerText = `Твій результат: ${score} з ${questions.length}. Точність: ${accuracy}%`
    }
    
    
    function startGame(){
        startScreen.classList.add('hide')
        resultScreen.classList.add('hide')
        quizScreen.classList.remove('hide')
        
        score = 0
        questionIndex = 0
    }
    startButton.addEventListener('click', startGame)
    restartButton.addEventListener('click', startGame)
    
    
    
});
