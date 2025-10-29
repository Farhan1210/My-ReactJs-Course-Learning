import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const addMethod = function() {
    return setCount(count + 1);
  }

  const subMethod = function() {
    return setCount(count - 1)
  }


  return (
    <div className='flex flex-col justify-start'>
      <div className='w-40 h-30 m-15 mb-4 text-center content-center bg-blue-700 text-white text-4xl'>{count}</div>
      <div className='flex gap-10'>
        <button onClick={addMethod} className='px-12 py-2 bg-red-500 rounded-full'>Add</button>
        <button onClick={subMethod} className='px-12 py-2 bg-red-500 rounded-full'>Sub</button>
      </div>

    </div>
  )
}

export default App
