import React from "react"

const QuizIntro = ({text, starter}) => {

    return <div className="quiz-intro">
        <p>{text}</p>
        <button onClick={starter}>START</button>
    </div>
}

export default QuizIntro