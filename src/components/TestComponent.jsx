import React, { useState } from 'react'
import Question from './Question'

const TestComponent = (props) => {
    const { questions, setStartTest, setQuestions } = props;
    const [scoreCounter, setScoreCounter] = useState(0)
    const [seeResult, setSeeResult] = useState(false)

    const finishTest = () => {
        setStartTest(false)
        setQuestions([])
    }

    return (
        <div className='mainContainer'>
            {!seeResult ?
                <div>
                    {questions.map((item, index) => {
                        return (
                            <div className='testStyles' key={index}>
                                {<Question
                                    item={item}
                                    setScoreCounter={(scoreCounter) => setScoreCounter(scoreCounter)}
                                    scoreCounter={scoreCounter}
                                />}
                            </div>
                        )
                    })
                    }
                </div>
                :
                <div className='result'>
                    თქვენი ქულა არის : {scoreCounter}
                </div>
            }
            <div className='buttonsDiv'>
                {!seeResult &&
                    <button className='btn btn-primary ' onClick={() => setSeeResult(true)}>შედეგის ნახვა</button>
                }
                <button className=' bnt btn-success ' onClick={() => { finishTest() }}>ახალი მცდელობის დაწყება</button>
            </div>
        </div>
    )
}
export default TestComponent;