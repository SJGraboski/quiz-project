import React, { useState, useEffect } from "react"
import QuizIntro from './quiz-intro.jsx'
import QuizBody from './quiz-body.jsx'

const Quiz = (props) => {
    const [quiz, setQuiz] = useState({
        questions: []
    })
    const [loaded, setLoaded] = useState(false)
    const [started, setStarted] = useState(false)
    const [finalScore, setFinalScore] = useState(0)
    const [over, setOver] = useState(false)

    const gameover = (score) => {
        console.log("ok")
        setFinalScore(score)
        setOver(true)
    }

    useEffect(() => {
        // we're just going to return an empty quiz for now
        const newQuiz = {
            name: "Test Quiz",
            intro: "Hey you! Think you can solve this quiz? Let's go, buster!!",
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
        setLoaded(true)
    }, [])

    const starter = () => {
        setStarted(true)
    }
    if (over) {
        return (
            <>
                <h2 className>GAME OVER</h2>
                <div className="score">Score: {finalScore}</div>
            </>
        )
    }
    if (loaded) {
        return (
            <div className="quiz">
            {
                (!started) ? (
                    <QuizIntro text={quiz.intro} starter={starter} />
                ) : (
                    <QuizBody quiz={quiz} gameover={gameover} />
                )
            }
            </div>
        )
    } 
    return (
        <div className="quiz-loading"></div>
    )
    
}

export default Quiz