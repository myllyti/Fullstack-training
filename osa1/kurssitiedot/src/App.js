const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header header1={course} />
      <Content parts={parts} />
      <Total
        count={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};



const Header = ({ header1 }) => {
  return <h1>{header1}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part text1={parts[0].name} text2={parts[0].exercises} />
      <Part text1={parts[1].name} text2={parts[1].exercises} />
      <Part text1={parts[2].name} text2={parts[2].exercises} />
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
