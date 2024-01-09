import { useState } from 'react'

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
  }

  function createInitialPoints() {
    const initialPoints = []
    for (let i=0; i<anecdotes.length; i++){
      initialPoints[i]=0
    }
    console.log("init length of array = " + initialPoints.length)
    return initialPoints;
  }

  const vote = (props) => {
    console.log("in vote -> "+selected, points)
    var copyPoints = [...points]
    console.log("copied points = " + copyPoints + copyPoints.length)
    copyPoints[selected] += 1
    console.log("points after voting" + copyPoints)
    setPoints(copyPoints)
    console.log(points)
  }

  return (
    <div>
      {anecdotes[selected]}<br></br>
      has {points[selected]} votes<br></br>
      <button onClick={vote}>vote</button>
      <button onClick={updateState} >next anecdotes</button>
    </div>
  )
}

export default App