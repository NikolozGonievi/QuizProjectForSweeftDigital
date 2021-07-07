import React, { useState } from 'react';
import QuestionsFilterComponent from './components/QuestionsFilterComponent';
import TestComponent from './components/TestComponent';
import './App.css';

const App = () => {
  const [startTest, setStartTest] = useState(false)
  const [questions, setQuestions] = useState([])

  return (
    <div className='form-group'>
      {!startTest ?
        <QuestionsFilterComponent
          setQuestions={(questions)=>{setQuestions(questions)}}
          setStartTest={setStartTest}
        /> :
        <TestComponent
          questions={questions}          
          setStartTest={setStartTest}
          setQuestions={setQuestions}
        />
      }
    </div>
  );
}
export default App;
