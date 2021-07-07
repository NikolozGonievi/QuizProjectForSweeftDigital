import React, { useEffect, useState } from 'react';
import '../App.css'

const Question = (props) => {
    const { item, setScoreCounter, scoreCounter } = props
    const [wasCorrect, setWasCorrect] = useState(false)
    const [answers,setAnswers]=useState([])    
    
    const ansMass = [...item.incorrect_answers]
    ansMass.splice(Math.floor(Math.random() * 4), 0, item.correct_answer)

    useEffect(()=>{       
        setAnswers(ansMass)       
    },[]) 

    const checkAnswer = (newAnswer) => {
        console.log(newAnswer, wasCorrect)
        if (wasCorrect) {
            setScoreCounter(scoreCounter - 1)
            setWasCorrect(false)
        } else {
            if (item.correct_answer === newAnswer) {
                setScoreCounter(scoreCounter + 1)
                setWasCorrect(true)
            }
        }
    }

    return (
        <div className='testStyles'>
            <label>{item.question}</label>
            <select onChange={(e) => checkAnswer(e.target.value)} >
                <option value="">
                </option>
                {answers.map((answer, index) => {
                    return (
                        <option value={answer} key={index}>
                            {answer}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
export default Question;