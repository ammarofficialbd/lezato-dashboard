import { SidebarCloseIcon } from 'lucide-react'
import { menuItems } from '../utils/icons'
import { NavLink } from 'react-router-dom'

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
   
  return (
    
       <aside className={`bg-white w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:h-auto fixed inset-y-0 left-0 z-50`}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <span className="text-2xl font-bold text-purple-500">Lezato.</span>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <SidebarCloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 px-4">
            <nav className="grid items-start gap-2">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all  hover:text-gray-800"
                  href="#"
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
      </aside>
    
  )
}

export default Sidebar

