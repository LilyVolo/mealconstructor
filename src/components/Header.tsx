import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <header className='mx-auto flex items-center justify-between pt-2 px-8 sm:px-6 bg-heroGradient'>
      <Link to="/">
      <div>
      <img width="130" src="logo_hor.png" alt="MealGenie" />
      </div >
      </Link>
    <nav>
    <ul className='flex items-center gap-10'>
  <li className='relative font-medium after:absolute after:left-0 after:right-0 after:bottom-1 after:h-[1px] after:scale-0 after:bg-black hover:after:scale-100 after:transition-transform'>
    test
  </li>
  <li className='relative font-medium after:absolute after:left-0 after:right-0 after:bottom-1 after:h-[1px] after:scale-0 after:bg-black hover:after:scale-100 after:transition-transform'>
    calories
  </li>
  <li className='relative font-medium after:absolute after:left-0 after:right-0 after:bottom-1 after:h-[1px] after:scale-0 after:bg-black hover:after:scale-100 after:transition-transform'>
    plan
  </li>
    </ul>
    </nav>

    <div className="flex justify-between items-center p-4">

  <div className="relative font-medium pr-5">
    Account
  </div>

  <div className="block lg:hidden" >
    <button 
    className="burger-menu space-y-2 w-8 h-8 flex flex-col justify-between items-center"
    onClick={toggleMenu } >
        <span
            className={`w-full h-1 transition-all duration-300 ${isOpen ? ('w-12  bg-white') : ('w-10  bg-black')} `}
          ></span>
             <span
            className={`w-full h-1 transition-all duration-300 ${isOpen ? ('w-12  bg-white') : ('w-10  bg-black')} `}
          ></span>
             <span
            className={`w-full h-1 transition-all duration-300 ${isOpen ? ('w-12  bg-white') : ('w-10  bg-black')} `}
          ></span>
    </button>
  </div>
</div>

   
    </header>
  )
}

export default Header
