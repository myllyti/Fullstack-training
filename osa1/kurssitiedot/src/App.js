const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const lista = [
    { part: part1, exercises: exercises1 },
    { part: part2, exercises: exercises2 },
    { part: part3, exercises: exercises3 },
  ];

  return (
    <div>
      <Header header1={course} />
      <Content lista={lista} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

const Header = ({ header1 }) => {
  return <h1>{header1}</h1>;
};

const Content = ({ lista }) => {
  return (
    <div>
      <Part text1={lista[0].part} text2={lista[0].exercises} />
      <Part text1={lista[1].part} text2={lista[1].exercises} />
      <Part text1={lista[2].part} text2={lista[2].exercises} />
    </div>
  );
};

const Part = ({ text1, text2 }) => {
  return (
    <p>
      {text1} {text2}
    </p>
  );
};

const Total = ({ count }) => {
  return <p>Number of exercises {count}</p>;
};

export default App;
