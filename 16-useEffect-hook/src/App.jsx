import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(10)

  // const addVAl = function() {
  //   setCount(count + 1)
  // }

  //   const subVAl = function() {
  //   setCount(count - 1)
  // }

  useEffect(() => {
    console.log("use effect function is runnig");
  }, [count2]) 

  return (
    <div>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onMouseEnter={() => {
        setCount(count + 1)
      }}
        onMouseLeave={() => {
          setCount2(count2 + 10)
        }}
      >Hover</button>
    </div>
  )
}

export default App
