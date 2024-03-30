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
  
  const Total = ({parts}) => {
    console.log(parts);
    const totalExercises = parts.reduce((sum, part) =>
      sum + part.exercises, 0)
  
    return (
      <b>Total of {totalExercises} exercises</b>
    )
  }

const Course = ({course}) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

export default Course