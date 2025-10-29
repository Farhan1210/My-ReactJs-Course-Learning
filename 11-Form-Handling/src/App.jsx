import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const submitForm = function() {
    console.log('Form Submitted...');
  }

  return (
    <div>
      <form onSubmit={function(e) {
        e.preventDefault();
        submitForm();
      }}>
        <input type="text" placeholder='Enter your name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
