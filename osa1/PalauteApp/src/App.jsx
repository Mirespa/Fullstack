import { useState } from 'react'

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value}) => (
  <p>{text} {value}</p>
)

const Statistics = ({good, neutral, bad , all}) => {
  const averageScore = () => {
    const updatedAll = good + neutral + bad
    const score = good * 1 + bad * -1
    if (updatedAll == 0) {
      return 0
    }

    return (score / updatedAll)
  }

  const positiveScore = () => {
    const score = good / all * 100 + '%'
    if (all == 0) {
      return 0
    }

    return score
  }
  const average = averageScore()
  const positive = positiveScore()

  console.log('average', average);
  console.log('positive', positive);

  if (all == 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log('good', updatedGood)
    setAll(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log('neutral', updatedNeutral)
    setAll(good + updatedNeutral + bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    console.log('bad', updatedBad)
    setAll(good + neutral + updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App