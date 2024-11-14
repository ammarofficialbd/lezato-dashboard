import React from 'react'
import { PlusIcon, ChevronDownIcon } from 'lucide-react'
import { customers } from '../common/data'


export default function CustomerList() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Customers</h2>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor</p>
        </div>
        <button className="bg-purple-500 text-white rounded-full p-2 hover:bg-purple-600 transition-colors">
          <PlusIcon size={20} />
        </button>
      </div>
      <ul className="space-y-4">
        {customers.map((customer) => (
          <li key={customer.id} className="flex items-center space-x-3">
            <img
              src={customer.image}
              alt={`${customer.name}'s avatar`}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{customer.name}</p>
              <p className={`text-xs ${
                customer.status === 'MEMBER' ? 'text-red-500' : 'text-purple-500'
              }`}>
                {customer.status}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button className="w-full mt-4 text-gray-400 hover:text-gray-600 transition-colors">
        <ChevronDownIcon className="mx-auto" size={20} />
      </button>
    </div>
  )
}