import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>
const Display = (props) => {
  return (
    <div>
      {props.anecdotes[props.selected]}<br></br>
      has {props.points[props.selected]} votes<br></br>
    </div>
  )
}

const Button = (props) => <button onClick={props.handler}>{props.text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [points, setPoints] = useState(createInitialPoints); 

  const [selected, setSelected] = useState(0)
  const updateState = () => {
    let randomState = Math.floor(Math.random() * anecdotes.length)
    console.log(randomState)
    setSelected(randomState)
    let maxAt = 0, max=points[0]
    for(let i = 0; i < points.length; i++){
      if (points[i] > max){
        maxAt = i
        max = points[i]
      }
    }
    setMaxSelected(maxAt)
  }

  const [maxSelected, setMaxSelected] = useState(0)

  function createInitialPoints() {
    const initialPoints = []
    for (let i=0; i<anecdotes.length; i++){
      initialPoints[i]=0
    }
    return initialPoints;
  }

  const vote = (props) => {
    var copyPoints = [...points]
    copyPoints[selected] += 1
    setPoints(copyPoints)

    let maxAt = 0, max=points[0]
    for(let i = 0; i < copyPoints.length; i++){
      if (copyPoints[i] > max){
        maxAt = i
        max = copyPoints[i]
      }
    }
    setMaxSelected(maxAt)
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Display anecdotes={anecdotes} points={points} selected={selected} />
      <Button handler={vote} text="vote"/>
      <Button handler={updateState} text="next anecdotes"/>
      <Header text="Anecdote with most votes"/>
      <Display anecdotes={anecdotes} points={points} selected={maxSelected} />
    </div>
  )
}

export default App