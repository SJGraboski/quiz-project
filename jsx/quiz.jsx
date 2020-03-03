import React, { useState, useEffect, useRef } from "react"

const Quiz = (props) => {
    const [quiz, setQuiz] = useState({
        questions: []
    })
    const [score, setScore] = useState(0)
    const [currentQ, setCurrentQ] = useState(0)
    const [timer, setTimer] = useState(15)
    const [wait, setWait] = useState(false)
    const [over, setOver] = useState(false)

    // timer ref
    const timerRef = useRef(null)
    const waitRef = useRef(null)
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

    // timer hook
    useEffect(() => {
        if (timer > 0) {
            timerRef.current = setTimeout(() => {
                setTimer(timer - 1)
            }, 1000)
        } else {
            setWait(true);
        }
    }, [timer]);

    // wait hook
    useEffect(() => {
        console.log(waitRef);
        if (wait) {
            waitRef.current = setTimeout(() => {
                console.log(currentQ);
                if (currentQ + 1 != quiz.questions.length){
                    setTimer(15)
                    setCurrentQ(currentQ + 1)
                    setWait(false)
                } else {
                    setOver(true)
                    setWait(false)
                }
            }, 5000)
        }
    }, [wait])

    // check answer (for click event)
    const checkAnswer = (e, num) => {
        if (quiz.questions[currentQ].answers[num].correct) {
            alert("YEPPERS")
            setScore(score + 1)
            clearTimeout(timerRef.current)
            setWait(true)
            setTimer(0)
            
        } else {
            alert("NOPE")
            clearTimeout(timerRef.current)
            setWait(true)
            setTimer(0)
        }
    }
    return (
        <div className="quiz">
            {quiz.questions.length > 0 &&
            <>
            <div className="timer">Time: {timer}</div>
            <div className="score">Score: {score}</div>
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