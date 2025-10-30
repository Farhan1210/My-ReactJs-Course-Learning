import { useNavigate } from 'react-router'

const About = () => {

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => {
        navigate('/')
      }} className="px-5 py-2 m-2 cursor-pointer active:scale-95 rounded bg-amber-400">Back to Home page</button>
      <button onClick={() => {
        navigate(-1)
      }} className="px-5 py-2 m-2 cursor-pointer active:scale-95 rounded bg-amber-400">Back</button>
      <h1>About page</h1>
    </div>
  )
}

export default About
