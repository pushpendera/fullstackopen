import { useState } from 'react'

const Header = (props) => <h1>{props.name}</h1>

const Button = (props) => <button onClick={props.handler}>{props.text}</button> 

const StatisticLine = (props) => <div>{props.name} {props.value}</div>

const Statistics = (props) => {
  if (props.good > 0 || props.neutral > 0 || props.bad > 0){
    return (
      <div>
        <Header name="statistics" />
        <StatisticLine name="good" value={props.good}/>
        <StatisticLine name="neutral" value={props.neutral}/>
        <StatisticLine name="bad" value={props.bad}/>
        <StatisticLine name="all" value={props.good + props.neutral + props.bad}/>
        <StatisticLine name="average" value={((props.good * 1) + (props.bad * -1))/(props.good + props.neutral + props.bad)}/>
        <StatisticLine name="positive" value={props.good/(props.good + props.neutral + props.bad)}/>
      </div>
    )
  }
  else {
    return (
      <div>
        <Header name="statistics" />
        <p>No feedback given</p>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => {
    let newGood = good;
    newGood += 1;
    setGood(newGood);
  }

  const neutralHandler = () => {
    let newNeutral = neutral;
    newNeutral += 1;
    setNeutral(newNeutral);
  }

  const badHandler = () => {
    let newBad = bad;
    newBad += 1;
    setBad(newBad);
  }
  return (
    <div>
      <Header name="give feedback" />
      <Button handler={goodHandler} text="good" />
      <Button handler={neutralHandler} text="neutral" />
      <Button handler={badHandler} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App