import React from 'react'
import { MenuIcon, SearchIcon, BellIcon, MessageCircleIcon as MessageIcon, UserIcon, CogIcon, DropletIcon } from 'lucide-react'
const Card = ({title, icon, amount}) => {
  return (
    <>
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
            <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="text-3xl font-semibold">{amount}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
             {icon}
            </div>
        </div>
    </>
  )
}

export default Card