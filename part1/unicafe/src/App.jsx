import { useState } from 'react'

const Header = (props) => <h1>{props.name}</h1>

const Button = (props) => <button onClick={props.handler}>{props.text}</button> 

const DisplayStats = (props) => {
  return(
    <div>
        {props.name} {props.value}
    </div>
  )
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
      <Header name="statistics" />
      <DisplayStats name="good" value={good}/>
      <DisplayStats name="neutral" value={neutral}/>
      <DisplayStats name="bad" value={bad}/>
      <DisplayStats name="all" value={good + neutral + bad}/>
      <DisplayStats name="average" value={((good * 1) + (bad * -1))/(good + neutral + bad)}/>
      <DisplayStats name="positive" value={good/(good+neutral+bad)}/>
    </div>
  )
}

export default App