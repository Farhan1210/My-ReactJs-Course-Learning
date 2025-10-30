import { useState } from 'react'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)

  const getData = async function() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response);
  }

    const getData2 = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response);
    const data = await response.json();
    console.log(data);
  }
  return (
    <div>
      <button onClick={getData2}>Get Data</button>
    </div>
  )
}

export default App
