import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [showModal, setShowModal] = useState(false)
    const [showMobile, setShowMobile] = useState(false)
  
    const handleClick = () => {
        if (showModal) {
            setShowModal(false)
        } else {
            setShowModal(true)
        }
	}	

    const handleMobileClick = () => {
        if (showMobile) {
            setShowMobile(false)
        } else {
            setShowMobile(true)
        }
    }
    

  return (
<nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

        <button onClick={handleMobileClick} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
         
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
      
        </button>

      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          {/* Logo <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> */}
          <Link to="/ask-stoic-virtues" className="text-white rounded-md px-3 py-2 text-md font-medium max-sm:hidden">Ask Stoic Virtues</Link>

        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
           
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Chat notifications</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
         </svg>
        </button>

        <div className="relative ml-3">
          <div>
            <button onClick={handleClick} type="button" className="relative flex rounded-full text-gray-300  bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
               Language
            </button>
          </div>

          {showModal &&<div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <Link to="/ask-stoic-virtues/KOR" className="block px-4 py-2 text-sm text-gray-700" >KOR</Link>
            <Link to="/ask-stoic-virtues" className="block px-4 py-2 text-sm text-gray-700" >ENG</Link>
          </div>}
        </div>
      </div>
    </div>
  </div>

 
  { showMobile && <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About me</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
    </div>
  </div> }
</nav>
	
    )
}

export default Header