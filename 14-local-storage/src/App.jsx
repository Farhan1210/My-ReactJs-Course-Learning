function App() {

  const user = {
    username: 'farhan',
    age: 21,
    city: 'Lahore'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const getUser = JSON.parse(localStorage.getItem('user'))

  console.log(getUser);


  return (
    <div>
      App
    </div>
  )
}

export default App
