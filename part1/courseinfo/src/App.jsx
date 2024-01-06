const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.ex_name} {props.ex_num}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part ex_name={props.part1['name']} ex_num={props.part1['exercises']} />
      <Part ex_name={props.part2['name']} ex_num={props.part2['exercises']} />
      <Part ex_name={props.part3['name']} ex_num={props.part3['exercises']} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1['exercises']} exercises2={part2['exercises']} exercises3={part3['exercises']} />
    </div>
  )
}

export default App