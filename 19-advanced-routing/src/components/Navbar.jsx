import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='nav'>
      <h3 className='text-2xl font-bold' >React</h3>
      <div>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium'  to='/about'>About</Link>
        <Link className='text-lg font-medium'  to='/contact'>Contact</Link>
        <Link className='text-lg font-medium'  to='/Product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
