import React, { useState, useEffect } from 'react'
import { objectToQueryString } from '../commonFunctions/queryfy'
import '../App.css';


const QuestionsFilterComponent = (props) => {
  const { setQuestions, setStartTest } = props
  const [filterState, setFilterState] = useState({ amount: '10' })
  const [selectCategories, setSelectCategories] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php',
      {
        method: 'GET'
      }).then(resp => resp.json()).then(resp => {
        setSelectCategories(resp.trivia_categories)        
      })
  }, [])

  const callQuestions = () => {
    let queryString = objectToQueryString(filterState)
    fetch(`https://opentdb.com/api.php?${queryString}`,
      {
        method: 'GET'
      }).then(resp => resp.json()).then(resp => {
        setQuestions(resp.results)       
      })
    setStartTest(true)
  }
 
  return (
    <div className='mainContainer'>
      <label>აირჩიეთ კითხვების რაოდენობა</label>
      <input defaultValue={10} onChange={((e) => { setFilterState({ ...filterState, amount: e.target.value }) })} type="number" min="1" max="50" />

      <label>აირჩიეთ  კატეგორია</label>
      <select onChange={(e) => { setFilterState({ ...filterState, category: e.target.value }) }}>
        <option value={''}></option>
        {
          selectCategories.map((category, index) => {
            return (
              <option key={index} value={category.id} >{category.name}</option>
            )
          })
        }
      </select>

      <label>აირჩიეთ ტესტის სირთულე</label>
      <select onChange={(e) => { setFilterState({ ...filterState, difficulty: e.target.value }) }}>
        <option value={''} ></option>
        <option value={'easy'}>ადვილი</option>
        <option value={'medium'}>საშუალო</option>
        <option value={'hard'}>რთული</option>
      </select>

      <label>აირჩიეთ დავალების სტილი</label>
      <select onChange={(e) => { setFilterState({ ...filterState, type: e.target.value }) }}>
        <option value={''}></option>
        <option value={'multiple'}>მრავალი არჩევანი</option>
        <option value={'boolean'}>სიმართლე/სიცრუე</option>
      </select>
      <button className='btn btn-primary mt-2' onClick={callQuestions}>ტესტის დაწყება</button>
      
    </div>
  )

}
export default QuestionsFilterComponent;