import { BellIcon, CookieIcon, MenuIcon, MessageSquareIcon, ReceiptIcon, SearchIcon } from 'lucide-react'
import React from 'react'
import user from '../assets/user (1).jpg'
const Navbar = ( {setSidebarOpen}) => {
  return (
    
       <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
            <MenuIcon className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search Here" className="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-500 hidden md:block" />
              <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
          </div>
          <div className="flex items-center space-x-4">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors hidden lg:block md:block">Recipe Guide</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors md:hidden">
            <CookieIcon/>
          </button>
            <BellIcon className="w-6 h-6 text-gray-600" />
            <MessageSquareIcon className="w-6 h-6 text-gray-600" />
            <img src={user} alt="User Avatar" className="w-8 h-8 rounded-full" />
          </div>
        </header>
     
  )
}

export default Navbar