import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <nav className="p-4 flex flex-row justify-between text-light absolute right-0 left-0 z-20 ">
      <div>
        <Link to="/">
          <img src={logo} alt="" className="w-48"/>
        </Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  )
}

export default NavBar