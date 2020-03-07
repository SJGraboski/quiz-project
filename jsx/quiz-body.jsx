import React, { useState, useEffect, useRef } from "react"

const QuizBody = ({quiz, gameover}) => {
    const [score, setScore] = useState(0)
    const [currentQ, setCurrentQ] = useState(0)
    const [wait, setWait] = useState(false)
    const [timer, setTimer] = useState(15)
    const [correct, setCorrect] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)

    // timer ref
    const timerRef = useRef(null)

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

    useEffect(() => {
        if (wait) {
            quiz.questions[currentQ].answers.some((el) => {
                if (el.correct) {
                    setCorrectAnswer(el.text);
                    return true
                }
            })
        }
    }, [wait])
    
    // check answer (for click event)
    const checkAnswer = (e, num) => {
        if (quiz.questions[currentQ].answers[num].correct) {
            setScore(score + 1)
            setCorrect(true)
        } else {
            setCorrect(false)
        }
        clearTimeout(timerRef.current)
        setWait(true)
        setTimer(0)
    }

    // wait ender
    const endWait = (e) => {
        setCorrectAnswer(null);
        setCorrect(null);
        if (currentQ + 1 != quiz.questions.length){
            setTimer(15)
            setCurrentQ(currentQ + 1)
        } else {
            gameover(score)
        }
        setWait(false)
    }

    if (wait) {
        return (
            <>
                {correct ? (<p>RIGHT!</p>) : (<p>WRONG</p>)}
                <div>Correct Answer: {correctAnswer}</div>
                <button onClick={endWait}>Next</button>
            </>
        )
    }
    
    return (
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
    )
}

export default QuizBody