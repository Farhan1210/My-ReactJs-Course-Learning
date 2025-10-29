import { useState } from 'react'

function App() {
  const [sum, setSum] = useState({user: 'farhan', age: 21})

  // function batchUpdate() {
  //   setCount(prev => prev + 1)
  //   setCount(prev => prev + 1)
  //   setCount(prev => prev + 1)
  // }

  // const createCopy = function() {
  //   const newSum = {...sum}
  //   newSum.user = 'Hussain'
  //   setSum(newSum);
  // }

    const createCopy = function() {
    setSum(prev => ({...prev, age:50}))
  }

  return (
    <div>
      {/* <div className='area'>{count}</div> */}
      <h1>{sum.user}, {sum.age}</h1>
      <button onClick={createCopy} className='btn'>Click</button>
    </div>
  )
}

export default App
