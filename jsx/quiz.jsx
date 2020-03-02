import React, { useState, useEffect } from "react"

const Quiz = (props) => {
    const [quiz, setQuiz] = useState({
        questions: []
    })
    const [score, setScore] = useState(0)
    const [currentQ, setCurrentQ] = useState(0)
    const [timer, setTimer] = useState(0)
    const [wait, setWait] = useState(false)
    useEffect(() => {
        // we're just going to return an empty quiz for now
        const newQuiz = {
            questions: [
                {
                    question: "What is 2 + 2",
                    answers: [
                        {text: '1', correct: false}, 
                        {text: '2', correct: false},
                        {text: '3', correct: false},
                        {text: '4', correct: true}
                    ],
                    media: ""
                },
                {
                    question: "What is 2 + 3",
                    answers: [
                        {text: '1', correct: false}, 
                        {text: '2', correct: false},
                        {text: '3', correct: false},
                        {text: '5', correct: true}
                    ],
                    media: ""
                },
                {
                    question: "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!",
                    answers: [
                        {text: 'Yes.', correct: false}, 
                        {text: 'I agree.', correct: false},
                        {text: 'For sure.', correct: false},
                        {text: 'Excuse me, what?', correct: true}
                    ],
                    media: ""
                },
            ]
        }
        setQuiz(newQuiz)
    }, [])
    console.log(quiz);

    const checkAnswer = (e, num) => {
        if (quiz.questions[currentQ].answers[num].correct) {
            alert("YEPPERS");
        } else {
            alert("NOPE");
        }
    }
    return (
        <div className="quiz">
            {quiz.questions.length > 0 &&
            <>
            <div className="question">
                {<p>{quiz.questions[currentQ].question}</p>}
                
            </div>
            <div className="answers">
                {
                    quiz.questions[currentQ].answers.map((question, i) => {
                        return (
                            <button 
                                className="answer" 
                                data-choice={i} 
                                key={i}
                                onClick={(e) => checkAnswer(e, i)}>
                                {question.text}
                            </button>
                        )
                    })
                }
            </div>
            </>
            }
        </div>
    )
}

export default Quiz