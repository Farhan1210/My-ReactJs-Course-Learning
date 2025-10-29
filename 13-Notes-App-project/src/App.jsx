import { useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = function() {
    const copyTask = [...task]

    copyTask.push({title, details})

    setTask(copyTask)
    console.log(copyTask);

    setTitle('')
    setDetails('')
  }

  const deleteNote = function(i) {
    const copyTask = [...task]

    copyTask.splice(i, 1)
    setTask(copyTask)

  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={function(e) {
        e.preventDefault()
        submitHandler()
      }} className='flex flex-col gap-4 lg:w-1/2 p-10 items-start'>
        <h3 className='text-4xl font-bold'>Add Notes</h3>
        <input 
          type="text"
          placeholder='Heading...'
          className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
          value={title}
          onChange={function(e) {
            setTitle(e.target.value)
          }}
        />
        <textarea 
          placeholder='Write Details' 
          className='px-5 w-full h-32 font-medium py-2 border-2 outline-none rounded'
          value={details}
          onChange={function(e) {
            setDetails(e.target.value)
          }}
          >

          </textarea>
        <button className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h3 className='text-4xl font-bold'>Recent Notes</h3>
        <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map((el, i) => {
            return <div key={i} className="flex justify-between items-start flex-col h-52 w-38 rounded-2xl px-4 pt-8 pb-4 text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{el.title}</h3>
                <p className='mt-3 font-semibold leading-tight text-gray-600'>{el.details}</p>
              </div>
              <button onClick={() => deleteNote(i)} className='py-1 text-xs w-full cursor-pointer active:scale-95 bg-red-500 text-white rounded font-bold'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
