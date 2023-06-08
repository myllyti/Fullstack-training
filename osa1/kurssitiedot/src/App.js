const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header header1={course} />
      <Content text1={part1} text2={exercises1} />
      <Content text1={part2} text2={exercises2} />
      <Content text1={part3} text2={exercises3} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = ({ header1 }) => {
  return (
    <h1>{header1}</h1>
  )
}

const Content = ({ text1, text2 }) => {
  return (
    <p>{text1} {text2}</p>
  )
}

const Total = ({ count }) => {
  return (
    <p>Number of exercises {count}</p>
  )
}

export default App
