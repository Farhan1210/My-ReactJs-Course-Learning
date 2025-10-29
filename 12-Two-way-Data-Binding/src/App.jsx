import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const submitForm = function(e) {
    e.preventDefault();
    console.log('Form Submitted by', name);

    setName('')
  }

  return (
    <div>
      <form onSubmit={function(e) {
        submitForm(e);
      }}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
