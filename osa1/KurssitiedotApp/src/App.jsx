const Header = ({course}) => {
  console.log(course.name)
  return <h1>{course.name}</h1>
}


const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}


const Content = ({parts}) => {
  console.log(parts)
  const partComponents = parts.map((part, index) => (
    <Part key={index} part={part}  />
  ))

  return <div>{partComponents}</div>
}

const Total = ({course}) => {
  console.log(course.parts);
  let totalExercises = 0
  for (let i = 0; i < course.parts.length; i++) {
    totalExercises += course.parts[i].exercises
    console.log(course.parts[i].exercises)
  }

  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total course={course} />
    </div>
  )
}

export default App