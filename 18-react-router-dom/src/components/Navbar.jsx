import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='nav'>
      <h3>React</h3>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
