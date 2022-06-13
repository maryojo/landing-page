import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {

const [showLoginDropdown, setLoginShowDropdown] = useState("invisible");
const [showSignupDropdown, setSignupShowDropdown] = useState("invisible");

  return(
    <nav className="p-4 flex flex-row justify-between text-light absolute right-0 left-0 z-20 ">
      <div>
        <Link to="/">
          <img src={logo} alt="" className="w-48"/>
        </Link>
      </div>
      <div>
        <div>

<div className=" relative inline-block text-left">
    <div className='flex flex-row space-x-3'>
        <button  onMouseEnter={() => setLoginShowDropdown(
           showLoginDropdown === "invisible" ? "visible" : "invisible"
        )} type="button" className="flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
            Login
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                </path>
            </svg>
        </button>
        <button  onMouseEnter={() => setSignupShowDropdown(
           showSignupDropdown === "invisible" ? "visible" : "invisible"
        )} type="button" className=" border border-gray-30 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
            Signup
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                </path>
            </svg>
        </button>
    </div>
    <div onMouseLeave={() => setLoginShowDropdown(
            showLoginDropdown === "visible" ? "invisible" : ""
        )}  className={"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 "+ showLoginDropdown}>
        <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                    <span>
                    <Link to="/login">
                        Login to LMS
                    </Link>
                    </span>
                </span>
            </div>
            <div className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                    <span>
                       Login to Accounting
                    </span>
                </span>
            </div>
            <div className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                    <span>
                        Login to HRMS
                    </span>
                </span>
            </div>
        </div>
    </div>
    <div onMouseLeave={() => setSignupShowDropdown(
            showSignupDropdown === "visible" ? "invisible" : ""
        )} className={"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 "+ showSignupDropdown}>
        <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {/* <Link> */}
            <div className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                    <span>
                    <Link to="/signup">
                    Signup on LMS
                    </Link>
                    </span>
                </span>
            </div>
            <div className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                    <span>
                    {/* <Link to="/signup"> */}
                       Signup on Accounting
                    {/* </Link> */}
                    </span>
                </span>
            </div>
            <div className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                    <span>
                        Signup on HRMS
                    </span>
                </span>
            </div>
            {/* </Link> */}
        </div>
    </div>
</div>

        </div>
      </div>
    </nav>
  )
}

export default NavBar