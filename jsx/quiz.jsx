import React, { useState, useEffect } from "react";

const Quiz = (props) => {
    const [quizInfo, setQuizInfo] = useState({
        score: 0,
        quiz: {}
    });
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
        setQuizInfo({quiz: newQuiz});
        console.log(quizInfo.quiz);
    }, []);

    return <div>ok</div>;
};

export default Quiz;